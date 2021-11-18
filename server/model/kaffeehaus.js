// Datenbank importieren
const db = require('../db/index.js');

// USER
// Alle Lokale und deren avg Bewertungen
// Nicht Fertig
async function getClubs() {
  try {
    const { rows } = await db.query('Select * from lokale');
    return { code: 200, data: rows };
  } catch (error) {
    return { status: 500, data: error.message };
  }
}

// Alle Events und den Lokalnamen
async function getEvents() {
  try {
    // Output von einem Select in einer Variable/ Objekt speicher
    const { rows } = await db.query(
      'SELECT l.name, title, description, time, date, lokal_id, events.id as event_id FROM events JOIN lokal l ON events.lokal_id = l.id order by events.id',
    );
    //   Return Statuscode und die daten
    return { code: 200, data: rows };
  } catch (error) {
    return { code: 500, data: error.message };
  }
}

// Alle Infos (Infos, Events, Bewertungen) über ein Lokal
// Nicht Fertig

async function getClub() {
  try {
    const bewertungen = await db.query(
      'select * from bewertungen where lokal_id = 2',
    ).rows;
    const events = await await db.query(
      ' select * from events where lokal_id = 2',
    ).rows;
    const club = await await (
      await db.query('select * from lokal where lokal.id = 2')
    ).rows;
    // FEHLER
    return { code: 200, data: { club, events, bewertungen } };
  } catch (error) {
    return { code: 500, data: error.message };
  }
}

// ADMIN
// Insert Club
// Nicht Fertig

async function createClub(club) {
  try {
    // Überprüfen: ob price max 3 Zeichen hat
    // Eig sollte ich die Eingaben am der Frontendüberprüfen / Ob es eine PLZ ist/ Stadt, ...
    // if (club.price.length > 3)
    //   return { code: 500, data: 'Falsche Eingabe' };
    // else
    await db.query(
      'insert into lokal (address, website, music, phone_number, price, name, opening_hours) values ($1, $2, $3, $4, $5, $6, $7)',
      [
        club.address,
        club.website,
        club.music,
        club.phone_number,
        club.price,
        club.name,
        club.opening_hours,
      ],
    );

    return { code: 200, data: 'Erfolgreich Hinzugefügt' };
  } catch (error) {
    return { code: 500, data: error.message };
  }
}

// Insert Event
// Nicht Fertig

async function createEvent(event) {
  try {
    await db.query(
      'insert into events (title, description, time, date, lokal_id, music)  values ($1, $2, $3, $4, $5, $6)',
      [
        event.title,
        event.description,
        event.time,
        event.date,
        event.lokal_id,
        event.music,
      ],
    );

    return { code: 200, data: 'Erfolgreich Hinzugefügt' };
  } catch (error) {
    return { code: 500, data: error.message };
  }
}

// Inster Bewertung
// Nicht Fertig

async function createBewertung(bewertung) {
  try {
    await db.query(
      'insert into bewertungen (stars, description, lokal_id)  values ($1, $2, $3)',
      [bewertung.stars, bewertung.description, bewertung.lokal_id],
    );

    return { code: 200, data: 'Erfolgreich Hinzugefügt' };
  } catch (error) {
    return { code: 500, data: error.message };
  }
}

// Update Club
// Nicht Fertig

async function updateClub(id, newClub) {
  try {
    // const { club } = await db.query('Select * from lokal where id = $1', [id]);

    // Wenn es dieses Lokal nicht gibt soll eine Fehlermeldung ausgegeben werden
    // if (club[0] === undefined) {
    //   return {
    //     code: 404,
    //     data: 'Not found',
    //   };
    // }
    await db.query(
      'update lokal set (address, website, music, phone_number, price, name, opening_hours)  = ($1, $2, $3, $4, $5, $6, $7) where id = $8',
      [
        newClub.address,
        newClub.website,
        newClub.music,
        newClub.phone_number,
        newClub.price,
        newClub.name,
        newClub.opening_hours,
        id,
      ],
    );
    return { code: 200, data: 'Update Erfolgreich' };
  } catch (error) {
    return { code: 500, data: error.message };
  }
}

// Update Events
// Nicht Fertig

async function updateEvent(id, newEvent) {
  try {
    // const { club } = await db.query('Select * from lokal where id = $1', [id]);

    // // Wenn es dieses Lokal nicht gibt soll eine Fehlermeldung ausgegeben werden
    // if (club[0] === undefined) {
    //   return {
    //     code: 404,
    //     data: 'Not found',
    //   };
    // }
    await db.query(
      'update events set (title, description, time, date, music) = ($1, $2, $3, $4, $5) where id = $6',
      [
        newEvent.title,
        newEvent.description,
        newEvent.time,
        newEvent.date,
        newEvent.music,
        id,
      ],
    );
    return { code: 200, data: 'Update Erfolgreich' };
  } catch (error) {
    return { code: 500, data: error.message };
  }
}

// Delete Club
async function deleteClub(id) {
  // const { club } = db.query('Select * from club where id = $1', [id]);

  // if (club[0] === undefined) {
  //   return { code: 404, data: 'Not Found' };
  // }
  await db.query('DELETE from lokal where id = $1', [id]);
  return { code: 200, data: 'Löschen Erfolgreich' };
}

// Delete Events
async function deleteEvent(id) {
  try {
    // DAS MUSS IN EINE EIGENE FUNKTION
    // const { event } = await db.query('Select title from events where id = $1', [
    //   id,
    // ]);
    // console.log(event);
    // console.log(id);
    // // Wenn es dieses Event nicht gibt soll eine Fehlermeldung ausgegeben werden
    // if (event === undefined) {
    //   return {
    //     code: 404,
    //     data: 'Not found',
    //   };
    // }

    await db.query('DELETE from events where id = $1', [id]);
    return { code: 200, data: 'Löschen Erfolgreich' };
  } catch (error) {
    return { code: 500, data: error.message };
  }
}

// Export
module.exports = {
  getClubs,
  getEvents,
  getClub,
  createClub,
  createEvent,
  createBewertung,
  updateClub,
  updateEvent,
  deleteEvent,
  deleteClub,
};
