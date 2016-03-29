/**
 * Created by Bradley on 3/29/16.
 */

var people = (function() {
    var people = ['Brad', 'Brian'];

    //Cache DOM
    var $el = $('#peopleModule');
    var $button = $el.find('button');
    var $input = $el.find('input');
    var $ul = $el.find('ul');
    var template = $el.find('#people-template').html();

    //Bind events
    $button.on('click', addPerson);
    $ul.delegate('i.del', 'click', deletePerson);

    render();

    function render() {
        $ul.html(Mustache.render(template, {people: people}));
    }

    function addPerson(value) {
        var name = (typeof value === "string") ? value : $input.val();
        people.push(name);
        render();
        $input.val('');
    }

    function deletePerson(event) {
        var i;
        if (typeof event === "number") {
            i = event;
        } else {
            var $remove = $(event.target).closest('li');
            i = $ul.find('li').index($remove);
        }
        people.splice(i, 1);
        render();
    }

    return {
        addPerson: addPerson,
        deletePerson: deletePerson
    };

})();