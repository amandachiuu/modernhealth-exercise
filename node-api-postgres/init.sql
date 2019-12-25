CREATE TABLE programs (
    program_id SERIAL NOT NULL PRIMARY KEY,
    title varchar(50) NOT NULL,
    description text NULL,
    image_id varchar);

INSERT INTO programs VALUES (
    DEFAULT,
    'Mindfulness',
    'Mindfulness is the basic human ability to be fully present, aware of where we are and what we’re doing, and not overly reactive or overwhelmed by what’s going on around us. In this module...',
    'meditation.jpg');

INSERT INTO programs VALUES (
    DEFAULT,
    'Values',
    'Moral values refer to a set of principles that guide an individual on how to evaluate right versus wrong. People generally apply moral values to justify decisions, intentions and actions, and it also defines the personal character of a person. In this module...',
    'compass.jpg');

INSERT INTO programs VALUES (
    DEFAULT,
    'Action',
    'An action mindset awakens your potential in yourself. It is not about pretending that everything is ok, easy or simple. In fact, it is about recognizing that life is often the opposite and giving yourself permission to acknowledge how you feel and then push through anyway. In this module...',
    'superwoman.jpg');

INSERT INTO programs VALUES (
    DEFAULT,
    'Flexibility',
    'Mentally flexible people have an expansive way of perceiving the world. A flexible mindset can lead to better problem-solving, enhanced creativity and less suffering after setbacks. In this module...',
    'flexible_mind.jpg');