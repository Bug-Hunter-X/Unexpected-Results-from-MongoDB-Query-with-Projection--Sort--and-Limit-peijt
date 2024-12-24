```javascript
// Create index to optimize the query
db.collection('myCollection').createIndex( { field: -1 } );

const query = { field: 'value' };
const options = {
  projection: { _id: 0, field1: 1, field2: 1 },
  sort: { field: -1 },
  limit: 10,
};

db.collection('myCollection').find(query, options).toArray((err, result) => {
  if (err) {
    console.error('Error fetching documents:', err);
  } else {
    console.log('Fetched documents:', result);
  }
});
```