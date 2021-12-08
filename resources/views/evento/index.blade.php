@extends('layouts.app')
@section('content')

<div class="container">
    <div id="agenda">
    </div>
</div>

<!-- Modal -->
<div class="modal fade" id="evento" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Datos del evento</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form action="" method="post" id="form-event">
                 {!! csrf_field() !!}
                    <div class="form-group">
                        <label for="" class="form-label">Título</label>
                        <input type="hidden" name="id" id="id" >
                        <input type="text" name="title" id="title" class="form-control" placeholder="Título del evento">
                    </div>
                    <div class="form-group">
                        <label for="descripcion">Descripción</label>
                        <textarea class="form-control"  name="descripcion" id="descripcion" cols="30" rows="3"></textarea>   
                    </div>
                    <div class="form-group d-none">
                        <label for="">Inicio</label>
                        <input type="date" name="start" id="start" class="form-control" placeholder="">
                    </div>
                    <div class="form-group d-none">
                        <label for="">Fin</label>
                        <input type="date" name="end" id="end" class="form-control" placeholder="">
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-success" id="btnGuardar">Guardar</button>
                <button type="button" class="btn btn-warning" id="btnModificar">Modificar</button>
                <button type="button" class="btn btn-danger" id="btnEliminar">Eliminar</button>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            </div>
        </div>
    </div>
</div>



@endsection