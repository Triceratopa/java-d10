//inserire i dati in client
INSERT INTO public.client (nome, cognome, anno_nascita, regione_residenza)
VALUES 
('Mario', 'Rossi', 1985, 'Lazio'),
('Giulia', 'Bianchi', 1990, 'Toscana'),
('Luca', 'Verdi', 1982, 'Lazio'),
('Anna', 'Gialli', 1995, 'Campania'),
('Paolo', 'Blu', 1980, 'Sicilia'),
('Francesca', 'Verdi', 1992, 'Lazio'),
('Alessandro', 'Neri', 1987, 'Puglia');

//cerco solo Mario
SELECT*FROM public.client WHERE nome = 'Mario';
//cerco nome e cognome dei clienti del 1982
SELECT nome,cognome
FROM public.client
WHERE anno_nascita = 1982;

//fatture
INSERT INTO public.fatture (numero_fattura, tipologia, importo, iva, id_cliente, data_fattura, numero_fornitore)
VALUES 
(2023, 'Vendita', 500.00, 22.00, 1, '2025-01-20', 1001),
(2024, 'Servizio', 150.00, 22.00, 2, '2025-01-20', 1002),
(2025, 'Vendita', 750.00, 22.00, 3, '2025-01-20', 1003);

