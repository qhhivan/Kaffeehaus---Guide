// Datenbank importieren
const db = require('../db/index.js');

// USER
// Alle Lokale und deren avg Bewertungen
async function getClubs() {
  try {
    const { rows } = await db.query(
      'SELECT lokal.id, address, website, music, phone_number, price, name, opening_hours, avg(stars)FROM lokal left join bewertungen b on lokal_id = lokal.id group by lokal.id',
    );
    return { code: 200, data: rows };
  } catch (error) {
    return { status: 500, data: error.message };
  }
}

// Alle Events und den Lokalnamen
async function getEvents() {
  try {
    // Output von einem SELECT in einer Variable/ Objekt speicher
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
async function getClub(id) {
  try {
    const bewertungen = await (
      await db.query('SELECT * FROM bewertungen WHERE lokal_id = $1', [id])
    ).rows;
    const events = await (
      await db.query('SELECT * FROM events WHERE lokal_id = $1', [id])
    ).rows;
    const club = await (
      await db.query('SELECT * FROM lokal WHERE lokal.id = $1', [id])
    ).rows;
    // FEHLER
    console.log(events);
    console.log(bewertungen);
    return { code: 200, data: { club, events, bewertungen } };
  } catch (error) {
    return { code: 500, data: error.message };
  }
}

// ADMIN

// GetEvent um zu Überprüfen ob es schon vorhanden ist
// GetClub um zu Überprüfen ob es schon vorhanden ist

// Insert Club
async function createClub(club) {
  try {
    // Überprüfen: ob price max 3 Zeichen hat
    // Eig sollte ich die Eingaben am der Frontendüberprüfen / Ob es eine PLZ ist/ Stadt, ...
    // if (club.price.length > 3)
    //   return { code: 500, data: 'Falsche Eingabe' };
    // else
    await db.query(
      'INSERT INTO lokal (address, website, music, phone_number, price, name, opening_hours) values ($1, $2, $3, $4, $5, $6, $7)',
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
async function createEvent(event) {
  try {
    await db.query(
      'INSERT INTO events (title, description, time, date, lokal_id, music)  values ($1, $2, $3, $4, $5, $6)',
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
async function createBewertung(bewertung) {
  try {
    await db.query(
      'INSERT INTO bewertungen (stars, description, lokal_id)  values ($1, $2, $3)',
      [bewertung.stars, bewertung.description, bewertung.lokal_id],
    );

    return { code: 200, data: 'Erfolgreich Hinzugefügt' };
  } catch (error) {
    return { code: 500, data: error.message };
  }
}

// Update Club
async function updateClub(id, newClub) {
  try {
    // const { club } = await db.query('SELECT * FROM lokal WHERE id = $1', [id]);

    // Wenn es dieses Lokal nicht gibt soll eine Fehlermeldung ausgegeben werden
    // if (club[0] === undefined) {
    //   return {
    //     code: 404,
    //     data: 'Not found',
    //   };
    // }
    await db.query(
      'UPDATE lokal SET (address, website, music, phone_number, price, name, opening_hours)  = ($1, $2, $3, $4, $5, $6, $7) WHERE id = $8',
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
async function updateEvent(id, newEvent) {
  try {
    // const { club } = await db.query('SELECT * FROM lokal WHERE id = $1', [id]);

    // // Wenn es dieses Lokal nicht gibt soll eine Fehlermeldung ausgegeben werden
    // if (club[0] === undefined) {
    //   return {
    //     code: 404,
    //     data: 'Not found',
    //   };
    // }
    await db.query(
      'UPDATE events SET (title, description, time, date, music) = ($1, $2, $3, $4, $5) WHERE id = $6',
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
  // const { club } = db.query('SELECT * FROM club WHERE id = $1', [id]);

  // if (club[0] === undefined) {
  //   return { code: 404, data: 'Not Found' };
  // }
  await db.query('DELETE FROM lokal WHERE id = $1', [id]);
  return { code: 200, data: 'Löschen Erfolgreich' };
}

// Delete Events
async function deleteEvent(id) {
  try {
    // DAS MUSS IN EINE EIGENE FUNKTION
    // const { event } = await db.query('SELECT title FROM events WHERE id = $1', [
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

    await db.query('DELETE FROM events WHERE id = $1', [id]);
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
