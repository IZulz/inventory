import Controller from '@ember/controller';
import {inject as service} from '@ember/service';

export default Controller.extend({
    barangService : service(),
    nama_barang: null,
    init(){
        this._super(...arguments)
    },
    actions : {
          selected: function(selected) {
            console.log(selected)
            this.set('barang.nama_departemen', selected)
            
            console.log(this.get('selected'))
        },
        selectedkat: function(selected) {
            console.log(selected)
        
            this.set('barang.nama_kategori',selected)
            console.log(this.get('selectedkat'))
        },
        updateBarang(item){
            this.get('barangService').updateBarang(item),
            this.transitionToRoute('barang.index')
        },
        cancel(){
            this.transitionToRoute('barang.index');
        }
    }
});
