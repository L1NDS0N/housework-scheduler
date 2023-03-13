<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */

    //       export interface ITask {
//   id: string;
//   task: string;
//   prority: 'ALTA' | 'MÉDIA' | 'BAIXA';
//   done: boolean;
//   date: Date;
//   user: {
//     id: string;
//     name: string;
//     photoUrl: string;
//   };
// }
    public function up(): void
    {
        Schema::create('schedules', function (Blueprint $table) {
            $table->id();
            $table->string('user_id');
            $table->string('task');
            $table->string('priority');
            $table->boolean('done')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('schedules');
    }
};
