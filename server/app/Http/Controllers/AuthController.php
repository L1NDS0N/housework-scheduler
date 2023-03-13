<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    private $tokenSecret = '@hss:tokenGenerator';
    public function signup(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|unique:users,email',
            'password' => 'required|string'
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);
        $token = $user->createToken($this->tokenSecret)->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response($response, 201);
    }

    public function loginGoogle(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|string',
            'photoUrl' => 'required|string'
        ]);

        $user = User::where('email', $request->email)->first();
        if (!$user) {
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'photoUrl'=> $request->photoUrl,
                'password' => bcrypt($request->name)
            ]);
        }

        if (!Hash::check($request->name, $user->password)) {
            return response([
                'message' => 'credenciais inválidas'
            ], 401);
        }

        $token = $user->createToken($this->tokenSecret)->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response($response, 200);
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string',
            'password' => 'required|string'
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response([
                'message' => 'credenciais inválidas'
            ], 401);
        }

        $token = $user->createToken($this->tokenSecret)->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response($response, 201);
    }


    public function logout()
    {
        auth()->user()->tokens()->delete();
        return response([
            'message' => 'Logout bem sucedido'
        ], 200);
    }
}
