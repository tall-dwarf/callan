<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreConsultationRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ConsultationController extends Controller
{
    public function store(StoreConsultationRequest $request)
    {
//        dd(123);
        Mail::send('emails', $request->validationData(), function($message) {
            $message->to('ilhalaktyushin@yandex.ru', '')->subject('Заявка на консультацию');
            $message->from('ilhalaktyushin@yandex.ru', 'Callan');
        });

        return response()->json(['message' => 'Сообщение успешно отправлено'], 200);
    }
}
