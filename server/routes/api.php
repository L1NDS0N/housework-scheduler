<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\SchedulesController;
use Illuminate\Support\Facades\Route;

Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/login-with-google', [AuthController::class, 'loginGoogle']);

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/logout', [AuthController::class, 'logout']);

    Route::get('/schedules', [SchedulesController::class, 'index']);
    Route::get('/schedules/{id}', [SchedulesController::class, 'show']);
    Route::post('/schedules', [SchedulesController::class, 'store']);
    Route::put('/schedules/{id}', [SchedulesController::class, 'update']);
    Route::put('/schedules/{id}/done', [SchedulesController::class, 'done']);
    Route::delete('/schedules/{id}', [SchedulesController::class, 'destroy']);
});
