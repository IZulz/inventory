import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';
import RSVP from 'rsvp';
export default Route.extend({
    barangService : service(),
    // departemenService : service(),
    kategoriService: service(),
    // // store : service(),
    model(){
        return RSVP.hash({
            // departemen : this.get('store').findAll('departemen').then(res => res),
            // departemen : this.get('kategoriService').lihatDepartemen().then(res => res),
            barang     : this.get('barangService').ambilBarang().then(res => res),
            kategori   : this.get('store').findAll('kategori').then(res => res)
            // kategori   : this.get('departemenService').lihatKategori().then(res => res)
        })
    },

    setupController(controller, model){
        controller.set('kategoris', model.kategori)
        // controller.set('departemens',model.departemen)
        controller.set('barangs',model.barang)
    }
});
