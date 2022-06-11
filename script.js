const RootComponent = {
  data() {
    return {
      show: false,
      tache: "",
      listeTache: [],
      listeTacheEncours: [],
      listeTacheTerminee: [],
    };
  },

  methods: {
    ajouterTache(e) {
      this.tache = e.target.value;
    },

    ajouterTacheDansLi() {
      this.listeTache.push(this.tache);
      this.tache = "";
    },

    ajouterTacheDansLiEnCours(e) {
      const index = e.target.dataset.index;
      this.listeTacheEncours.push(this.listeTache[index]);
      this.listeTache.splice(index, 1);
    },

    ajouterTacheDansLiTerminee(e) {
      const index = e.target.dataset.index;
      this.listeTacheTerminee.push(this.listeTache[index]);
      this.listeTache.splice(index, 1);
    },

    ajouterTacheEnCoursDansLiTerminee(e) {
      const index = e.target.dataset.index;
      this.listeTacheTerminee.push(this.listeTacheEncours[index]);
      this.listeTacheEncours.splice(index, 1);
    },

    remove(e) {
      const index = e.target.dataset.index;
      const list = e.target.dataset.list;
      this[list].splice(index, 1);
    },
  },
};

Vue.createApp(RootComponent).mount("#root");
