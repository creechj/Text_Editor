import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log("Updating db");
  // connect to db
  const jateDb = await openDB("jate", 1);
  // transact on db
  const trans = jateDb.transaction("jate", "readwrite");
  // store transaction
  const storeTrans = trans.objectStore("jate");
  const addTrans = storeTrans.put({ id: 1, text: content });
  // confirm post
  const confirm = await addTrans;
  console.log("content saved", confirm);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log("Retrieving data");
  // connect to db
  const jateDb = await openDB("jate", 1);
  // transact on db
  const trans = jateDb.transaction("jate", "readonly");
  // transact retrieval
  const storeTrans = trans.objectStore("jate");
  const getTrans = storeTrans.getAll();
  // confirm retrieval
  const result = await getTrans;
  console.log('data retrieved', result);
  return result;
};

initdb();
