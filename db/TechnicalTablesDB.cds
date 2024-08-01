namespace com.pacg.cssp;

@assert.unique: {code: [code]}
entity Parameters {
  key ID   : UUID not null;
      code : String(100) @title: '{i18n>Parameter-code}';
}
