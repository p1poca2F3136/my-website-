function changeLanguage(language) {
    if (language === "en") {
        document.getElementById("introduction-apre").innerHTML = "👋 Hello, I'm <span class='highlight'>Ryan</span>";
        document.getElementById("introduction-text").innerHTML = "I am a technology enthusiast with a passion for web development and design, but my curiosity goes far beyond that. I aim to study Computer Science and love exploring everything technology has to offer. Here, you'll find posts about my experiences, projects, and the adventures I encounter along the way. My interests range from programming and design to the fascinating world of computing and much more. Feel free to follow my journey and explore everything I share here!<br><br>You can find my projects on my <a href='projects/projects.html' class='highlight-link'>projects page</a> or on my <a href='github.com' class='highlight-link-github'>GitHub</a>.<br><br>Or perhaps you would like to learn more about how I think, my workflow and much more over at my <a href='blog/blog.html' class='highlight-link-blog'>blog</a>.";
        document.getElementById("introduction-contact").innerHTML = "📧 You can reach me at";
        document.getElementById("contact-list").innerHTML = `<li><a href="https://ryan.contact/" class="highlight-contact">Quick Contact</a></li>
                <li>Discord: <a href="https://discord.gg/8RVhHeJH3x" class="highlight-discord-server">ryanbarboza</a>, the link here is to my discord server</li>
                <li>Email <a href="me@ryanbarboza.com" class="highlight-mycontact">[at] ryanbarboza [dot] com</a></li>`;
    } else if (language === "pt-br") {
        document.getElementById("introduction-apre").innerHTML = "👋 Olá, eu sou <span class='highlight'>Ryan</span>";
        document.getElementById("introduction-text").innerHTML = "Sou um entusiasta da tecnologia com uma paixão por desenvolvimento web e design, mas minha curiosidade vai muito além disso. Pretendo estudar Ciência da Computação e adoro explorar tudo o que a tecnologia tem a oferecer. Aqui, você encontrará postagens sobre minhas experiências, projetos e as aventuras que encontro pelo caminho. Meus interesses variam de programação e design ao fascinante mundo da computação e muito mais. Sinta-se à vontade para acompanhar minha jornada e explorar tudo o que compartilho aqui!<br><br>Você pode encontrar meus projetos na minha <a href='projects/projects.html' class='highlight-link'>página de projetos</a> ou no meu <a href='github.com' class='highlight-link-github'>GitHub</a>.<br><br>Ou talvez você queira saber mais sobre como penso, meu fluxo de trabalho e muito mais no meu <a href='blog/blog.html' class='highlight-link-blog'>blog</a>.";
        document.getElementById("introduction-contact").innerHTML = "📧 Você pode me contatar em";
        document.getElementById("contact-list").innerHTML = `<li><a href="https://ryan.contact/" class="highlight-contact">Contato Rápido</a></li>
                <li>Discord: <a href="https://discord.gg/8RVhHeJH3x" class="highlight-discord-server">ryanbarboza</a>, o link aqui é para o meu servidor do discord</li>
                <li>Email <a href="me@ryanbarboza.com" class="highlight-mycontact">[at] ryanbarboza [dot] com</a></li>`;
    } else if (language === "es") {
        document.getElementById("introduction-apre").innerHTML = "👋 Hola, soy <span class='highlight'>Ryan</span>";
        document.getElementById("introduction-text").innerHTML = "Soy un entusiasta de la tecnología con una pasión por el desarrollo web y el diseño, pero mi curiosidad va mucho más allá. Mi objetivo es estudiar Ciencias de la Computación y me encanta explorar todo lo que la tecnología tiene para ofrecer. Aquí, encontrarás publicaciones sobre mis experiencias, proyectos y las aventuras que encuentro en el camino. Mis intereses van desde la programación y el diseño hasta el fascinante mundo de la computación y mucho más. ¡Siéntete libre de seguir mi viaje y explorar todo lo que comparto aquí!<br><br>Puedes encontrar mis proyectos en mi <a href='projects/projects.html' class='highlight-link'>página de proyectos</a> o en mi <a href='github.com' class='highlight-link-github'>GitHub</a>.<br><br>O quizás quieras saber más sobre cómo pienso, mi flujo de trabajo y mucho más en mi <a href='blog/blog.html' class='highlight-link-blog'>blog</a>.";
        document.getElementById("introduction-contact").innerHTML = "📧 Puedes contactarme en";
        document.getElementById("contact-list").innerHTML = `<li><a href="https://ryan.contact/" class="highlight-contact">Contacto Rápido</a></li>
                <li>Discord: <a href="https://discord.gg/8RVhHeJH3x" class="highlight-discord-server">ryanbarboza</a>, el enlace aquí es para mi servidor de discord</li>
                <li>Email <a href="me@ryanbarboza.com" class="highlight-mycontact">[at] ryanbarboza [dot] com</a></li>`;
    } else if (language === "ja") {
        document.getElementById("introduction-apre").innerHTML = "👋 こんにちは、私は<span class='highlight'>ライアン</span>です";
        document.getElementById("introduction-text").innerHTML = "私はウェブ開発とデザインに情熱を持つ技術愛好家ですが、私の好奇心はそれをはるかに超えています。コンピュータサイエンスを学ぶことを目指しており、技術が提供するすべてを探索するのが大好きです。ここでは、私の経験、プロジェクト、および道中で遭遇する冒険についての投稿が見つかります。私の興味は、プログラミングやデザインから、計算の魅力的な世界まで多岐にわたります。どうぞ私の旅をフォローし、ここで共有するすべてを探索してください！<br><br>私のプロジェクトは、<a href='projects/projects.html' class='highlight-link'>プロジェクトページ</a>または私の<a href='github.com' class='highlight-link-github'>GitHub</a>で見つけることができます。<br><br>あるいは、私の考え方、ワークフローなどについてもっと知りたい場合は、私の<a href='blog/blog.html' class='highlight-link-blog'>ブログ</a>を参照してください。";
        document.getElementById("introduction-contact").innerHTML = "📧 私に連絡することができます";
        document.getElementById("contact-list").innerHTML = `<li><a href="https://ryan.contact/" class="highlight-contact">クイックコンタクト</a></li>
                <li>Discord: <a href="https://discord.gg/8RVhHeJH3x" class="highlight-discord-server">ryanbarboza</a>、ここにリンクは私のディスコードサーバーです</li>
                <li>Email <a href="me@ryanbarboza.com" class="highlight-mycontact">[at] ryanbarboza [dot] com</a></li>`;
    }
}
