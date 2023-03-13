<?php

namespace App\Http\Controllers;

use App\Models\Schedules;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SchedulesController extends Controller
{

    public function index()
    {
        $userId = Auth::user()->id;
        $allSchedules = Schedules::where('user_id', $userId)->get();
        return response()->json($allSchedules, 200);
    }
    public function show(string $id)
    {
        $schedule = Schedules::find($id);
        if (!$schedule) {
            return response(['message' => 'este item não existe']);
        }

        $userId = Auth::user()->id;
        if ($userId != $schedule->user_id) {
            return response(['message' => 'você não pode ver informações de outro usuário'], 400);
        }

        return response()->json($schedule, 200);
    }

    public function store(Request $request)
    {
        $userId = Auth::user()->id;

        $request->validate([
            'task' => 'string|required|max:100|min:3',
            'priority' => 'string|required|max:5|min:4',
        ]);


        $schedule = new Schedules([
            'user_id' => $userId,
            'task' => $request->input('task'),
            'priority' => mb_strtoupper($request->input('priority')),
        ]);

        if ($schedule->save())
            return response()->json($schedule);
        else {
            return response(['message' => 'erro durante criação'], 400);
        }
    }

    public function update(Request $request, string $id)
    {
        $request->validate([
            'task' => 'string|required|max:100|min:3',
            'priority' => 'string|required|max:5|min:4',
            'done' => 'boolean|required'
        ]);

        $schedule = Schedules::find($id);
        if (!$schedule) {
            return response(['message' => 'este item não existe']);
        }

        $userId = Auth::user()->id;
        if ($userId != $schedule->user_id) {
            return response(['message' => 'você não pode inserir informações para outro usuário'], 400);
        }

        $schedule->update($request->only(['task', 'priority', 'done']));
        return response()->json($schedule, 200);
    }

    public function done(string $id)
    {


        $schedule = Schedules::find($id);
        if (!$schedule) {
            return response(['message' => 'este item não existe']);
        }

        $userId = Auth::user()->id;
        if ($userId != $schedule->user_id) {
            return response(['message' => 'você não pode inserir informações para outro usuário'], 400);
        }

        $schedule->update(['done' => !$schedule->done]);
        return response()->json($schedule, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $schedule = Schedules::find($id);
        if (!$schedule) {
            return response(['message' => 'este item não existe']);
        }

        $userId = Auth::user()->id;
        if ($userId != $schedule->user_id) {
            return response(['message' => 'você não pode deletar informações de outro usuário'], 400);
        }

        $schedule->delete();
        return response([], 200);
    }
}
