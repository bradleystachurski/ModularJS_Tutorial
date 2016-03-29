/**
 * Created by Bradley on 3/28/16.
 */
function() {
    var people = {
        people: [],
        template: $('#people-template').html(),
        init: function() {
            this.cacheDom();
        }
        cacheDom: function() {
            this.$el = $('#peopleModule');
            this.$button = this.$el.find('button');
            this.$input = this.$el.find('input');
            this.$ul = this.$el.find('ul');
        }
    };
}();