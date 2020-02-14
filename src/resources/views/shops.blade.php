@extends('layouts.app')

@section('content')
<div class="container">
    <div class="panel panel-default">
        <div class="panel-heading">店舗</div>
        <div class="panel-body">
            <div class="text-right">
                <a href="#" class="btn btn-default btn-block">追加</a>
            </div>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th>名前</th>
                    <th>レート</th>
                    <th></th>
                </tr>
            </thead>
            <tbody id="shops"></tbody>
        </table>
    </div>
</div>
@endsection