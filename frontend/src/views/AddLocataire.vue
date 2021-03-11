<template>
  <div class="container">
    <h1>Ajouter un Locataire</h1>
    <div class="container mt-5">
    
    
      <form>
      <button type="submit" class="mb-5 btn btn-outline btn-lg nice-btn-outline">
          Ajouter une photo
        </button>
        <div class="mb-3">
          <input
            placeholder="Nom"
            type="text"
            class="form-control form-control-lg nice-input"
            id="nom_locataire"
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div class="mb-3">
          <input
            placeholder="Prénom"
            type="text"
            class="form-control form-control-lg nice-input"
            id="prenom_locataire"
            required
          />
        </div>
        <div class="mb-3">
          <input
            placeholder="Email"
            type="email"
            class="form-control form-control-lg nice-input"
            id="email_locataire"
            required
          />
        </div>
        <div class="mb-3">
          <input
            placeholder="Revenus"
            type="text"
            class="form-control form-control-lg nice-input"
            id="revenus_locataire"
            required
          />
        </div>
        <div class="mb-3">
          <input
            placeholder="Justificatifs"
            type="text"
            class="form-control form-control-lg nice-input"
            id="justificatifs_locataire"
            required
          />
        </div>
        <button type="submit" class="btn btn-block btn-lg nice-btn">
          ENREGISTRER
        </button>
      </form>
    </div>
  </div>
</template>

