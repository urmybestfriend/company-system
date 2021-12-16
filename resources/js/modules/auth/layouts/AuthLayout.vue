<template>
    <div class="auth d-flex align-items-center flex-column">
        <h2 class="mt-4">Bienvenido!</h2>
        <form class="auth__form mt-3 d-flex flex-column">
            <div class="mb-3">
                <label for="code" class="form-label">Usuario</label>
                <input
                    type="text"
                    class="form-control"
                    id="user"
                    name="user"
                    placeholder="Usuario"
                    autocomplete="off"
                    required
                />
            </div>
            <div class="mb-3">
                <label for="product" class="form-label">Contraseña</label>
                <input
                    type="password"
                    class="form-control"
                    id="password"
                    name="password"
                    placeholder="Contraseña"
                    required
                />
            </div>

            <button class="btn btn-dark">Ingresar</button>
        </form>
    </div>
</template>

<script>
export default {};
</script>

<style>
.auth__form {
    width: 20rem;
}
</style>
