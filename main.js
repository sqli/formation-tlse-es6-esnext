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
        *ringBell(times) {
            for (let index = 0; index < times; index++) {
                yield `Ringing the bell #${index + 1}`;
            }
        }
    });

    function *personsGenerator() {
        yield {firstName: 'Robin', lastName: 'Coma Delperier'};
        yield {firstName: 'Matthieu', lastName: 'Mauny'};
        yield {firstName: 'Alex', lastName: 'Escudero'};
    }
    const personIterator = personsGenerator();
    const person1 = new Person(personIterator.next().value);
    const person2 = new Person(personIterator.next().value);
    person1.getIn();

    let ringBellIterator = person2.ringBell(3);
    console.log(ringBellIterator.next());
    console.log(ringBellIterator.next());
    console.log(ringBellIterator.next());
    console.log(ringBellIterator.next());

    ringBellIterator = person2.ringBell(10);
    console.log(ringBellIterator.next());
    console.log(ringBellIterator.next());
    for (let ringBell of ringBellIterator) {
        console.log(ringBell);
    }

    const persons = [...personsGenerator()];

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