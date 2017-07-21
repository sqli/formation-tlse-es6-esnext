{
    const persons = [{firstName: 'Robin', lastName: 'Coma Delperier'}, {firstName: 'Matthieu', lastName: 'Mauny'}, {firstName: 'Alex', lastName: 'Escudero'}];

    function Greeter(messagePrefix, messageSuffix) {
        this.prefix = messagePrefix;
        this.suffix = messageSuffix;
    }
    Greeter.prototype.welcomePersons = function (persons) {
        return persons.map((person) => {
            return this.prefix + person.firstName + ' ' + person.lastName + this.suffix;
        });
    };

    const greeter = new Greeter('Greetings, kind ', ', have a nice day');
    const greetings = greeter.welcomePersons(persons);
    console.log(greetings);
}