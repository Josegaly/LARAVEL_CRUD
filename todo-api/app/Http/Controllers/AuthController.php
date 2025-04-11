<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    // ✅ Inscription utilisateur
    public function register(Request $request)
    {
        // Validation des champs
        $request->validate([
            'name' => 'required',
            'email' => 'required',
            'password' => 'required'
        ]);

        // Création de l'utilisateur
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            // On chiffre le mot de passe
            'password' => Hash::make($request->password),
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;

        // Retourne l'utilisateur créé avec un token
        return response()->json([
            'user' => $user,
            'access_token' => $token,
            'message' => 'Inscription réussie',
        ]);
    }

    // ✅ Connexion utilisateur
    public function login(Request $request)
    {
        // Vérifie que les champs sont bien fournis
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        // Vérifie si les identifiants sont corrects
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json(['message' => 'Identifiants incorrects'], 401);
        }

        // Récupère l'utilisateur connecté
        $user = Auth::user();
        $token = $user->createToken('auth_token')->plainTextToken;

        // Retourne un message de succès avec les infos
        return response()->json([
            'user' => $user,
            'message' => 'Connexion réussie',
        ]);
    }

    // ✅ Déconnexion utilisateur
    public function logout(Request $request)
    {
        // Supprime tous les tokens actifs de l'utilisateur
        $request->user()->tokens()->delete();

        return response()->json(['message' => 'Déconnexion réussie']);
    }

    // ✅ Récupérer l'utilisateur connecté
    public function user(Request $request)
    {
        return response()->json($request->user());
    }
}
