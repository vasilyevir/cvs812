export default {
    actions: {
        async fetchAlbums(ctx, userId) {
            const res = await fetch('https://jsonplaceholder.typicode.com/albums')
            const albums = await res.json();
            const filteredAlbums = await albums.filter((element) => {
                return element.userId === Number(userId);
            }).map((el) => {
                return {[el.id]: el.title}
            })

            ctx.commit('updateAlbums', filteredAlbums)
        },
        async fetchPhotos(ctx, arrAlbumsIds) {
            const allPhotos = await fetch('https://jsonplaceholder.typicode.com/photos?' + arrAlbumsIds.map(el => 'albumId=' + Object.keys(el)).join('&'));
            const allPhotosJSON = await allPhotos.json();

            let objectCountAlbumsIds = {};
            const arr = arrAlbumsIds.map((el) => Number(Object.keys(el)[0]));
            const filteredArrayPhotos = [];

            for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
                filteredArrayPhotos.push(allPhotosJSON.filter((el) => {
                    objectCountAlbumsIds[el.albumId] = objectCountAlbumsIds[el.albumId] + 1 || 1;
                    return el.albumId === i  && objectCountAlbumsIds[el.albumId] <= 5;
                }))
                objectCountAlbumsIds = {}
            }

            ctx.commit('updatePhotos', filteredArrayPhotos)
        }
    },
    mutations: {
        updateAlbums(state, albums) {
            state.albums = albums;
        },
        updatePhotos(state, photos) {
            state.photos = photos;
        },
    },
    state: {
        albums: [],
        photos: [],
    },
    getters: {
        allAlbums(state) {
            return state.albums;
        },
        albumsPhotos(state) {
            console.log(state.photos)
            return state.photos
        }
    }
}
