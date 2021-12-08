<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Evento extends Model
{
    //reglas de modelo
    static $rules = [
        'title'=> 'required',
        'descripcion' => 'required',
        'start'=> 'required',
        'end'=> 'required',
    ];
    //Campos que se trabajan
    protected $fillable = ['cve_evento', 'title', 'descripcion', 'start', 'end'];
}
