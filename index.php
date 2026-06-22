<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/reset.css">
    <link rel="stylesheet" href="./css/header.css">
    <link rel="stylesheet" href="./css/apresentacao.css">
    <link rel="stylesheet" href="./css/sobre.css">
    <link rel="stylesheet" href="./css/tecnologias.css">
    <link rel="stylesheet" href="./css/projetos.css">
    <title>Pedro Paiva</title>
</head>
<body>
        <?php include './components/header/header.php'; ?>

    <main>
        <section class='section-apresentacao'>
            <?php include './components/sections/apresentacao.php'; ?>
        </section>

        <section id='sobre' class='section-sobre'>
            <?php include './components/sections/sobre.php'; ?>
        </section>

        <section id='tecnologias' class='section-tecnologias'>
            <?php include './components/sections/tecnologias.php'; ?>
        </section>

        <section id='projetos' class='section-projetos'>
            <?php include './components/sections/projetos.php'; ?>
        </section>
    </main>

    <footer>
        <p>© 2026 Pedro Paiva. Todos os diretos reservados.</p>
    </footer>

</body>
</html>