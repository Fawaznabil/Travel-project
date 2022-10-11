<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\softDeletes;

class M_Product extends Model
{
    use softDeletes;
    protected $table = 'product';
    protected $fillab = [
        'name', 
        'teks',
        'image'
    ];
    protected $hidden;
    
}
