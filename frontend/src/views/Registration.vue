<template>
  <div class="login">
    <h1>Inscription</h1>
    <div class="container mt-5">
      <form>
        <div class="mb-3">
          <input
            placeholder="Nom"
            type="nom"
            class="form-control form-control-lg nice-input"
            id="nom"
            aria-describedby="NameHelp"
            required
          />
        </div>
        <div class="mb-3">
          <input
            placeholder="Prénom"
            type="prenom"
            class="form-control form-control-lg nice-input"
            id="iprenom"
            aria-describedby="SurNameHelp"
            required
          />
        </div>
        <div class="mb-3">
          <input
            placeholder="Adresse Email"
            type="email"
            class="form-control form-control-lg nice-input"
            id="imail"
            aria-describedby="EmailHelp"
            required
          />
        </div>
        <div class="mb-3">
          <input
            placeholder="Mot de passe"
            type="password"
            class="form-control form-control-lg nice-input"
            id="ipassword"
            aria-describedby="PasswordHelp"
            required
          />
        </div>
        <div class="mb-3">
          <input
            placeholder="Confirmation du mot de passe"
            type="password"
            class="form-control form-control-lg nice-input"
            id="icpassword"
            aria-describedby="ConfirmationPasswordHelp"
            required
          />
        </div>
        <button type="Registration" class="btn btn-block nice-btn">
          S'INSCRIRE
        </button>
      </form>
    </div>
  </div>
</template>
