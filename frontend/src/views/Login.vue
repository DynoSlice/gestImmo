<template>
  <div class="login">
    <h1>Connexion</h1>

    <div class="container mt-5">
      <form>
        <div class="mb-3">
          <input
            placeholder="immo@barack.com"
            type="email"
            class="form-control form-control-lg nice-input"
            id="mail"
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div class="mb-3">
          <input
            placeholder="**********"
            type="password"
            class="form-control form-control-lg nice-input"
            id="password"
            required
          />
        </div>
        <button type="submit" class="btn btn-block btn-lg nice-btn">
          SE CONNECTER
        </button>
      </form>
    </div>
  </div>
</template>