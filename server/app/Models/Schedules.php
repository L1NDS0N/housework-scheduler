<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Schedules extends Model
{
    protected $table = 'schedules';
    protected $primaryKey = 'id';
    protected $fillable = ['user_id', 'task', 'done', 'priority'];
    use HasFactory;
}
