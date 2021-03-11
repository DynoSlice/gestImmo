<template>
  <div class="container">
    <h1>Maison (à Loué)</h1>
    <div class="container mt-5">
    
    
      <form>
       <img
      class="img-fluid image-locataire"
      src="https://bootdey.com/img/Content/avatar/avatar1.png"
      alt="image"
    />
        <div class="mt-5 mb-3">
          <input
            placeholder="Adresse"
            type="text"
            class="form-control form-control-lg nice-input"
            id="adresse"
            aria-describedby="emailHelp"
            required
            value="12 Avenue Antoine de Saint-Exupéry, Baillargues 34670"
          />
        </div>
        <div class="mb-3">
          <input
            placeholder="Surface (m²)"
            type="text"
            class="form-control form-control-lg nice-input"
            id="surface"
            required
            value="150 m²"
          />
        </div>
        <div class="mb-3">
          <input
            placeholder="Loyer mensuel hors charges"
            type="email"
            class="form-control form-control-lg nice-input"
            id="loyer"
            required
            value="1500 € par mois"
          />
        </div>
        <div class="mb-3">
          <input
            placeholder="Classe énergétique"
            type="text"
            class="form-control form-control-lg nice-input"
            id="classe_ene"
            required
             value="B+"
          />
        </div>
        <div class="mb-3">
          <input
            placeholder="Equipement"
            type="text"
            class="form-control form-control-lg nice-input"
            id="equipement"
            required
            value="Piscine"
          />
        </div>
        <button type="submit" class="btn btn-block btn-lg nice-btn">
          ENREGISTRER
        </button>
      </form>
    </div>
  </div>
</template>

