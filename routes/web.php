<?php

use Illuminate\Support\Facades\Route;
use App\Models\Blog;

Route::get('/', function () {
    $blogs = Blog::query()->limit(4)->get();
    return inertia('Home', ['blogs' => $blogs]);
});

Route::get('/project', function () {
    return inertia('Project');
});

Route::get('/service', function () {
    return inertia('Service');
});

Route::get('/contact', function () {
    return inertia('Contact');
});
