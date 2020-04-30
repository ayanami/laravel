<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateScoresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('scores', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('shop_id')->unsigned();
            $table->date('date_of');
            $table->integer('first')->default(0);
            $table->integer('second')->default(0);
            $table->integer('third')->default(0);
            $table->integer('forth')->default(0);
            $table->decimal('profit', 7, 0)->default(0);
            $table->timestamps();

            $table->foreign('shop_id')->references('id')->on('shops');
            $table->unique(['shop_id', 'date_of']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('scores');
    }
}
