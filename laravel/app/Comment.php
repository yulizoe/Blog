<?php
namespace App;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model{
      protected $fillable = array('author', 'bid', 'ccontent');

}