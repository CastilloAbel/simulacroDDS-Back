// acceder a la base usando aa-sqlite
const db = require("aa-sqlite");

async function CrearBaseSiNoExiste() {

  // abrir base, si no existe el archivo/base lo crea
  await db.open('./.data/clientes.sqlite');

  let existe = false;
  let res = null;
  existe = false;

  sql =
    "SELECT count(*) as contar FROM sqlite_schema WHERE type = 'table' and name= 'clientes'";
  res = await db.get(sql, []);
  if (res.contar > 0) existe = true;
  if (!existe) {
    await db.run(
      `CREATE table clientes( 
        IdCliente INTEGER PRIMARY KEY AUTOINCREMENT, 
        ApellidoYNombre TEXT NOT NULL UNIQUE,
        DNI INTEGER NOT NULL
      )`
    );
    console.log("tabla clientes creada!");

    await db.run(
      `INSERT INTO clientes (ApellidoYNombre, DNI)
      VALUES 
          ('GARCIA, JUAN', 12345678),
          ('RODRIGUEZ, MARIA', 98765432),
          ('LOPEZ, CARLOS', 54321678),
          ('FERNANDEZ, LAURA', 87654321),
          ('MARTINEZ, ANA', 23456789),
          ('GOMEZ, PEDRO', 98761234),
          ('PEREZ, SOFIA', 45678912),
          ('TORRES, RICARDO', 12349876),
          ('SILVA, ANDREA', 56781234),
          ('SANCHEZ, DIEGO', 87654321),
          ('FLORES, LAURA', 65432198),
          ('RIOS, GABRIEL', 12378945),
          ('ACOSTA, MARCELA', 98745632),
          ('GIMENEZ, DANIEL', 34561278),
          ('MENDOZA, CAROLINA', 87123456),
          ('SUAREZ, JOSE', 21678943),
          ('CASTRO, FLORENCIA', 98127654),
          ('LUNA, RICARDO', 56784321),
          ('PERALTA, VALENTINA', 12347865),
          ('ROJAS, MATIAS', 87654321),
          ('MOLINA, ANDRES', 98765439),
          ('CABRERA, LUCIA', 54321673),
          ('GALLO, FEDERICO', 87654326),
          ('DOMINGUEZ, MARCELO', 23456783),
          ('CORREA, JUANA', 98761236),
          ('PAREDES, GUSTAVO', 45678919),
          ('ROCHA, LUCIANA', 12349872),
          ('ARIAS, JORGE', 56781239),
          ('MEDINA, AGUSTINA', 87654328),
          ('CARDOZO, GERMAN', 65432193),
          ('SOSA, NATALIA', 12378948),
          ('GONZALEZ, JULIAN', 98745635),
          ('RIVERO, BEATRIZ', 34561271),
          ('TORO, LEONEL', 87123459),
          ('LOPEZ, MARIANA', 21678946),
          ('MANSILLA, LUCAS', 98127659),
          ('FERRARI, ALEJANDRA', 56784324),
          ('OLIVERA, EMILIANO', 12347869),
          ('VAZQUEZ, PAULA', 87654324),
          ('BENITEZ, MICAELA', 98765435),
          ('FIGUEROA, IGNACIO', 54321679),
          ('AGUIRRE, DANIELA', 87654329),
          ('RODRIGUEZ, ANDRES', 65432194),
          ('SANCHEZ, MARIA', 12378949),
          ('PEREZ, JUAN', 98745638),
          ('RUIZ, CAROLINA', 34561274),
          ('PENA, MATIAS', 87123464),
          ('SILVA, LUCIO', 87654327),
      ('LUNA, JULIETA', 65432199),
      ('TORRES, MATEO', 12347866),
      ('MOLINA, CAMILA', 87654323),
      ('CABRERA, LEANDRO', 98765431),
      ('GALLO, SOFIA', 54321677),
      ('DOMINGUEZ, PABLO', 87654322),
      ('CORREA, ABRIL', 23456788),
      ('PAREDES, NICOLAS', 98761233),
      ('ROCHA, MARTINA', 45678911),
      ('ARIAS, LUCAS', 12349875),
      ('MEDINA, SOLEDAD', 56781233),
      ('CARDOZO, EMANUEL', 87654320),
      ('SOSA, MARIA', 65432197),
      ('GONZALEZ, LUCIANO', 12378944),
      ('RIVERO, JULIA', 98745631),
      ('TORO, JUAN PABLO', 34561277),
      ('LOPEZ, AGUSTINA', 87123455),
      ('MANSILLA, TOMAS', 21678942),
      ('FERRARI, CAMILA', 98127653),
      ('OLIVERA, SANTIAGO', 56784320),
      ('VAZQUEZ, VALERIA', 12347864),
      ('BENITEZ, FERNANDO', 87654319),
      ('FIGUEROA, NATALIA', 98765430),
      ('AGUIRRE, ANDRES', 54321676),
      ('RODRIGUEZ, CATALINA', 87654318),
      ('SANCHEZ, LUCIANA', 23456787),
      ('PEREZ, LEONARDO', 98761231),
      ('RUIZ, ROCIO', 45678910),
      ('PENA, ANDREA', 12349874),
      ('GOMEZ, IGNACIA', 56781232),
      ('SILVA, LUCAS', 87654317),
      ('LUNA, MARTINA', 65432196),
      ('TORRES, BENJAMIN', 12347863),
      ('MOLINA, SOFIA', 87654316),
      ('CABRERA, GONZALO', 98765429),
      ('GALLO, LUCIA', 54321675),
      ('DOMINGUEZ, LUCAS', 87654315),
      ('CORREA, MARIA', 23456786),
      ('PAREDES, MARTIN', 98761229),
      ('ROCHA, CATALINA', 45678909);`
    );
  }

  // cerrar la base
  db.close();
}

CrearBaseSiNoExiste();

module.exports =  CrearBaseSiNoExiste;
