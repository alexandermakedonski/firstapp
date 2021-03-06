@extends('app')

@section('content')
    <h1 class="page-heading">Your notices</h1>

    <table class="table table-striped table-bordered">
        <thead>
            <th>This contenct:</th>
            <th>Accessible Here:</th>
            <th>Is Infringing Upon my work here:</th>
            <th>Notice Send:</th>
            <th>Contenct Removed:</th>
        </thead>

        <tbody>
            @foreach($notices as $notice)
                <tr>
                    <td>{{ $notice->infringing_title }}</td>
                    <td>{!! link_to($notice->infringing_link) !!}</td>
                    <td>{!! link_to($notice->original_link) !!} </td>
                    <td>{{ $notice->created_at->diffForHumans() }}</td>
                    <td>
                        {!! Form::open(['data-remote','method' => 'PATCH', 'url'=>'notices/'.$notice->id]) !!}
                        <!-- Form Input -->
                        <div class="form-group">
                            {!! Form::checkbox('content_removed',$notice->content_removed,$notice->content_removed,['data-click-submits-form','data-size'=>'mini']) !!}
                        </div>
                        {!! Form::close() !!}
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>

    @unless(count($notices))
        <p class="text-center">You haven'y any dmca notices yet!</p>
    @endunless
@endsection