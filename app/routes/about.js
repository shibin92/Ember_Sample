import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        return [
            {id:1, src:"../assets/images/Koala.jpg", label:"Koala Bear"},
            {id:2, src:"../assets/images/Desert.jpg", label:"Desert"},
            {id:3, src:"../assets/images/Penguins.jpg", label:"Penguins"},
            {id:4, src:"../assets/images/Tulips.jpg", label:"Tulips"},
            {id:5, src:"../assets/images/Jellyfish.jpg", label:"Jelly Fish"},
            {id:6, src:"../assets/images/Lighthouse.jpg", label:"Lighthouse"},
            {id:7, src:"../assets/images/Hydrangeas.jpg", label:"Hydrangeas"},
            {id:8, src:"../assets/images/Chrysanthemum.jpg", label:"Chrysanthemum"}
        ];
    }
});
