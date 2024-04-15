console.log('Hello World');

var client = contentful.createClient({
    space: 'qdmdbgz916fk',
    accessToken: 'p7W7Rve6ee9RsA1irBv5Mv1FLcHdbPDBv3wCYiOKXfE',
  });

  console.log(client);

  client.getEntries().then(function (entries) {
    console.log(entries);

entries.items.forEach(function (entry) {
     console.log(entry.fields.title);
    }); 
  });