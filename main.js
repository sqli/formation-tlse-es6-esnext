{
    function Person({firstName, lastName}) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Object.assign(Person.prototype, {
        fullName() {
            return `${this.firstName} ${this.lastName}`;
        },
        getIn() {
            console.log('Getting in the door');
        },
        ringBell(times) {
            new Array(times).fill().forEach((value, index) => console.log(`Ringing the bell #${index + 1}`));
        }
    });

    const persons = [{firstName: 'Robin', lastName: 'Coma Delperier'}, {firstName: 'Matthieu', lastName: 'Mauny'}, {firstName: 'Alex', lastName: 'Escudero'}]
        .map(attributes => new Person(attributes));
    const [person1, person2] = persons;
    person1.getIn();
    person2.ringBell(3);

    function Greeter(messagePrefix, messageSuffix) {
        this.prefix = messagePrefix;
        this.suffix = messageSuffix;
    }
    Greeter.prototype.welcomePersons = function (persons) {
        return persons.map((person) => {
            return `${this.prefix}<em>${person.fullName()}</em>${this.suffix}`;
        });
    };

    const greeter = new Greeter('Greetings, kind ', ', have a nice day');
    const greetings = greeter.welcomePersons([person1, person2]);
    console.log(greetings);
    console.log(persons);
}