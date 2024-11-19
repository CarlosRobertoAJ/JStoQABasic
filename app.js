const LIST = [
    {
        id: 1,
        nome: 'Samurai Jack coconut',
        avatar: "images/sjcoconut.jpg",
        liked: false
    },
    {
        id: 2,
        nome: 'Samurai Jack DEV',
        avatar: 'images/sjdev.jpg',
        liked: false
    },
    {
        id: 3,
        nome: 'Samurai Jack Katana',
        avatar: 'images/sjkatana.jpg',
        liked: false
    },
    {
        id: 4,
        nome: 'Samurai Jack Meditation',
        avatar: 'images/sjmeditation.jpg',
        liked: false
    },
    {
        id: 5,
        nome: 'Samurai Jack Scooter',
        avatar: 'images/SJSCOOTER.jpg',
        liked: false
    }
];

const App = new Vue({
    el: '#app',
    data: {
        title: 'Samurai Jack',
        userName: 'Samurai Jack',
        fotos: LIST,  // Lista de fotos
        searchName: '',  // Valor da busca
    },
    methods: {
        like(item) {
            item.liked = !item.liked; // Alterna o estado do like
            alert(`Você deu like na foto de ${item.nome}!`);
        },
        remove(id) {
            this.fotos = this.fotos.filter(item => item.id !== id); // Filtra a lista para remover o item com o ID especificado
        },
        search() {
            if (this.searchName === '') {
                alert('O campo de busca é obrigatório');
                return;
            }

            const result = LIST.filter(item => item.nome.toLowerCase().includes(this.searchName.toLowerCase()));

            if (result.length === 0) {
                alert('Nenhuma foto encontrada.');
                this.fotos = LIST; // Mostra todas as fotos se nenhuma correspondência for encontrada
            } else {
                this.fotos = result;
            }
        },
        clearSearch() {
            this.searchName = '';
            this.fotos = LIST; // Restaura a lista completa ao limpar a busca
        },
        filterFotos() {
            // Filtra as fotos com base no texto da pesquisa
            if (this.searchName === '') {
                this.fotos = LIST; // Se o campo de busca estiver vazio, mostra todas as fotos
            } else {
                this.fotos = LIST.filter(item => item.nome.toLowerCase().includes(this.searchName.toLowerCase()));
            }
        }
    },
    watch: {
        // Observa mudanças no valor de searchName e chama o método filterFotos
        searchName() {
            this.filterFotos();
        }
    }
});
