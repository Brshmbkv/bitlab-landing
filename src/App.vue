<template>
  <!-- 1 Section -->
  <section class="relative px-4 pb-14 text-white gradient xl:px-0 overflow-hidden">
    <header class="flex justify-between items-center pt-5 xl:container">
      <div class="flex items-center">
        <img src="/bitlab.svg" alt="bitlab_logo" />
        <h1 class="flex flex-col font-open-sans font-semibold uppercase leading-4">Bitlab <span>Academy</span></h1>
      </div>
      <nav class="xl:-ml-16">
        <ul class="hidden xl:flex space-x-12">
          <li><a href="#">Навигатор</a></li>
          <li><a href="#">Навигатор</a></li>
          <li><a href="#">Навигатор</a></li>
          <li><a href="#">Навигатор</a></li>
        </ul>
      </nav>
      <div class="hidden xl:flex space-x-6">
        <div>
          <p>+7 747 629 1556</p>
          <p>+7 747 629 1556</p>
        </div>
        <button class="text-gradient font-semibold leading-8 px-4 py-2 bg-white rounded-xl">Учиться бесплатно</button>
      </div>
      <div class="xl:hidden flex items-center">
        <p class="text-xs font-medium mr-5">Учиться бесплатно</p>
        <img src="/menu.svg" alt="menu button" />
      </div>
    </header>
    <h3 class="text-4xl font-bold leading-snug mt-24 xl:container xl:text-center xl:text-[64px] xl:w-[882px] xl:leading-[80px]">
      Основы программирования
      <span class="inline-block relative">
        <span class="z-10 inline-block relative">на Java</span>
        <div class="hidden xl:block absolute bottom-4 left-1 z-0 h-6 w-[227px] bg-[#6657C2]"></div>
      </span>
    </h3>
    <p class="mt-4 xl:container xl:text-center xl:mt-10 xl:w-[621px] xl:text-xl xl:leading-8">
      Научитесь писать чистый код, создавать приложения на самом востребованном языке программирования за 2 месяца
    </p>
    <div class="xl:flex justify-center xl:mb-[254px]">
      <button class="mt-6 py-6 px-16 rounded-2xl bg-white text-lg leading-8 font-semibold text-gradient xl:mt-12 xl:px-10 xl:py-6">Получить консультацию</button>
    </div>
    <div class="xl:hidden flex items-center justify-center mx-auto mb-14 w-20 h-20 gradient-rect rounded-3xl relative z-10">
      <img src="/java.svg" alt="java icon" />
    </div>
    <img class="hidden xl:block absolute bottom-20" src="/white-wave-line.svg" alt="" />
    <img class="hidden xl:block absolute -bottom-24 right-0 opacity-20" src="/java-lg.svg" alt="" />
    <pre class="hidden xl:block w-[32rem] absolute bottom-0 left-10 text-2xl opacity-20">
  n = int(input('Insert n'))
  my_list = [] 
  for i in range(n): 
    my_list.append(int(input('Insert number'))) 
  m = int(input('Insert m')) 
  if m in my_list: 
    print('YES') 
  else: 
    print('NO')
    </pre>
  </section>
  <!-- 2 Section -->
  <section class="py-10 bg-gray-100">
    <div class="relative">
      <div class="absolute w-px h-full bg-gray-200 left-[50px] xl:hidden"></div>
      <div class="xl:flex justify-between xl:container">
        <div class="relative ml-20 mb-6 xl:ml-0 xl:mb-0">
          <section class="timeline-circle">
            <h4 class="text-gray-500 mb-2">Ближайший старт</h4>
            <p class="font-medium text-[18px]">15 августа</p>
          </section>
        </div>
        <div class="relative ml-20 mb-6 xl:ml-0 xl:mb-0">
          <section class="timeline-circle">
            <h4 class="text-gray-500 mb-2">Расписание</h4>
            <p class="font-medium text-[18px]">Пн-Ср-Пт 19:00-21:00</p>
          </section>
        </div>
        <div class="relative ml-20 mb-6 xl:ml-0 xl:mb-0">
          <section class="timeline-circle">
            <h4 class="text-gray-500 mb-2">Длительность</h4>
            <p class="font-medium text-[18px]">2 месяца</p>
          </section>
        </div>
        <div class="relative ml-20 mb-6 xl:ml-0 xl:mb-0">
          <section class="timeline-circle">
            <h4 class="text-gray-500 mb-2">Формат</h4>
            <p class="font-medium text-[18px]">Online</p>
          </section>
        </div>
        <div class="relative ml-20 xl:ml-0 xl:mb-0">
          <section class="timeline-circle">
            <h4 class="text-gray-500 mb-2">Уровень</h4>
            <p class="font-medium text-[18px]">C нуля</p>
          </section>
        </div>
        <div class="hidden xl:block px-5 py-2 border border-gray-200 rounded-full bg-white">
          <p class="text-2xl font-bold leading-10">50,000 ₸ в месяц</p>
        </div>
      </div>
    </div>
  </section>
  <img src="/line.svg" alt="" />
  <div class="xl:hidden">
    <img src="/line.svg" alt="" />
    <div class="flex items-center px-4 h-16">
      <p class="text-2xl font-bold">50,000 ₸ в месяц</p>
    </div>
    <img src="/line.svg" alt="" />
  </div>
  <!-- 3 Section -->
  <section class="relative mt-20 px-4 mb-14 xl:container xl:my-32">
    <h3 class="text-3xl font-bold leading-10 mb-6 xl:text-[56px] xl:mb-16">Кому подойдет этот курс</h3>
    <div class="grid grid-cols-1 gap-y-4 xl:grid-cols-3 xl:gap-x-6">
      <div class="p-8 bg-gray-100 rounded-3xl">
        <h3 class="text-2xl font-bold leading-8 pb-3">Новичкам в программировании</h3>
        <p class="text-[15px]">
          Вы только начинаете свой путь в программировании и хотите получить четкие инструкции как начать программировать и работать с этим. Вы сможете приступить к обучению абсолютно с нуля.
        </p>
      </div>
      <div class="p-8 bg-gray-100 rounded-3xl">
        <h3 class="text-2xl font-bold leading-8 pb-3">Уже имеющим опыт в программировании</h3>
        <p class="text-[15px]">
          У вас уже есть хорошая база, а наши тренеры-эксперты помогут вам раскрыть ваш потенциал в Java разработке и откроют все секреты углубленного изучения программирования.
        </p>
      </div>
      <div class="p-8 bg-gray-100 rounded-3xl">
        <h3 class="text-2xl font-bold leading-8 pb-3">Кто хочет сменить профессию</h3>
        <p class="text-[15px]">
          Вы устали от скучной работы с 9 до 6 и хотите начать работать над интересными IT проектами. Java - это идеальный вариант для вас, язык имеет большую сферу применения в Казахстане и найти
          работу не составит большого труда.
        </p>
      </div>
    </div>
    <img class="absolute top-[23rem] right-[-6rem] hidden xl:block" src="/img/Giftbox.png" alt="png" />
  </section>
  <!-- 4 Section -->
  <section class="bg-[#1992ea] pt-8 text-white xl:px-36 xl:pt-20 overflow-hidden">
    <h2 class="mx-4 text-3xl font-bold leading-10 mb-3 xl:text-[56px] xl:leading-[64px] xl:w-[784px] xl:mb-6">Почему изучать Java сейчас - это правильное решение</h2>
    <p class="mx-4 mb-6 xl:text-xl xl:leading-8 xl:w-[770px] xl:mb-16">
      Java уже больше 20 лет находится в топе языков программирования во всем мире и имеет огромную сферу применения. Уверенное знание Java позволяет работать в разных сферах: от создания мобильных
      приложений до разработки высоконагруженных WEB систем международного масштаба.
    </p>
    <div class="mx-4 mb-8 grid grid-cols-1 gap-y-4 xl:w-[760px] xl:grid-cols-2 xl:gap-6 xl:mx-0 xl:mb-0 xl:pb-[120px]">
      <div class="px-4 py-8 bg-white/20 rounded-[20px] xl:p-12">
        <h3 class="mb-3 text-xl font-semibold xl:mb-4 xl:text-[32px] xl:leading-10">200+</h3>
        <p class="text-[14px] xl:text-[18px] xl:leading-8">Открытых вакансий только в Казахстане по Java Разработке</p>
      </div>
      <div class="px-4 py-8 bg-white/20 rounded-[20px] xl:p-12">
        <h3 class="mb-3 text-xl font-semibold xl:mb-4 xl:text-[32px] xl:leading-10">400,000 ₸</h3>
        <p class="text-[14px] xl:text-[18px] xl:leading-8">Открытых вакансий только в Казахстане по Java Разработке</p>
      </div>
      <div class="px-4 py-8 bg-white/20 rounded-[20px] xl:p-12 xl:col-span-2">
        <h3 class="mb-3 text-xl font-semibold xl:mb-4 xl:text-[32px] xl:leading-10">Крупные проекты</h3>
        <p class="text-[14px] xl:text-[18px] xl:leading-8">Java используют исключительно в больших проектах как Netflix, Google, Uber, Linkedin и больших компаниях Казахстана</p>
      </div>
    </div>
    <div class="relative xl:hidden">
      <img src="/img/pexels-cottonbro-sm.png" alt="png" />
      <img class="absolute top-[-100px] left-[200px]" src="/img/Coin-sm.png" alt="png" />
      <img class="absolute bottom-[-5px]" src="/img/Paperbag-sm.png" alt="png" />
    </div>
    <div class="relative hidden xl:block">
      <div class="w-[780px] h-[520px] absolute -bottom-6 right-[-16.25rem] overflow-hidden">
        <img src="/img/pexels-cottonbro.png" class="h-full" alt="" />
      </div>
      <img class="absolute bottom-[24.25rem] right-6" src="/img/Coin.png" alt="png" />
      <img class="absolute bottom-[33rem] -right-32" src="/img/Paperbag.png" alt="png" />
    </div>
  </section>
  <!-- 5 Section -->
  <section class="mx-4 mt-[60px] xl:container xl:mt-32">
    <h2 class="text-3xl font-bold leading-10 mb-12 xl:w-[543px] xl:mb-20 xl:text-[56px] xl:leading-[72px]">Чему вы научитесь за 2 месяца</h2>
    <div class="grid grid-cols-1 gap-12 xl:grid-cols-3 xl:gap-16">
      <div>
        <div class="h-20 w-20 bg-[#bb6bd91f] rounded-[20px] flex items-center justify-center mb-6 xl:mb-8">
          <img src="/Code.svg" alt="code icon" />
        </div>
        <h3 class="text-xl font-bold mb-4 xl:text-2xl">Писать чистый код на Java</h3>
        <p class="text-[14px] xl:text-[18px]">С нуля изучите синтаксис языка и научитесь создавать собственные алгоритмы по лучшим практикам, решать задачи любой сложности.</p>
      </div>
      <div>
        <div class="h-20 w-20 flex items-center justify-center mb-6 xl:mb-8 bg-[#6d6bd91f] rounded-[20px]">
          <img src="/Stack.svg" alt="stack icon" />
        </div>
        <h3 class="text-xl font-bold mb-4 xl:text-2xl">Применять принципы ООП</h3>
        <p class="text-[14px] xl:text-[18px]">Вы изучите 4 концепции объектно-оринетированного программирования и научитесь их применять в своих небольших приложениях на Java.</p>
      </div>
      <div>
        <div class="h-20 w-20 flex items-center justify-center mb-6 xl:mb-8 bg-[#6bd9d91f] rounded-[20px]">
          <img src="/GitFork.svg" alt="gitflok icon" />
        </div>
        <h3 class="text-xl font-bold mb-4 xl:text-2xl">Работать с сетями и многопоточностью</h3>
        <p class="text-[14px] xl:text-[18px]">
          Создадите два приложения и подключите с помощью них два отдельных компьютера по сети, а также оптимизируете все процессы с помощью многопоточности в Java.
        </p>
      </div>
      <div>
        <div class="h-20 w-20 flex items-center justify-center mb-6 xl:mb-8 bg-[#d9936b1f] rounded-[20px]">
          <img src="/PuzzlePiece.svg" alt="puzzle piece icon" />
        </div>
        <h3 class="text-xl font-bold mb-4 xl:text-2xl">Оптимизировать код</h3>
        <p class="text-[14px] xl:text-[18px]">Научитесь отлавливать и работать над исключениями, сможете разбираться чужом коде и структурировать его.</p>
      </div>
      <div>
        <div class="h-20 w-20 flex items-center justify-center mb-6 xl:mb-8 bg-[#d96ba01f] rounded-[20px]">
          <img src="/Database.svg" alt="database icon" />
        </div>
        <h3 class="text-xl font-bold mb-4 xl:text-2xl">Научитесь работать с базой данных MySQL</h3>
        <p class="text-[14px] xl:text-[18px]">
          Вы изучите язык SQL и научитесь писать запросы в базу данных. А также подключать свое приложение на Java к базе данных MySQL и запускать запросы уже в Java.
        </p>
      </div>
      <div>
        <div class="h-20 w-20 flex items-center justify-center mb-6 xl:mb-8 bg-[#d96b6b1f] rounded-[20px]">
          <img src="/GridFour.svg" alt="grid icon" />
        </div>
        <h3 class="text-xl font-bold mb-4 xl:text-2xl">Графический интерфейс</h3>
        <p class="text-[14px] xl:text-[18px]">
          Вы сможете создавать свое Desktop приложение на Java GUI, отрисовать кнопки, элементы ввода и окно приложения. Создадите несколько мини-проектов на Java GUI.
        </p>
      </div>
    </div>
  </section>
  <!-- 6 Section -->
  <section class="relative mt-14 xl:mt-2">
    <div class="relative mb-8 xl:hidden">
      <img src="/line1-lg.svg" class="overflow-hidden" alt="line1" />
      <img src="/img/computer.png" class="absolute top-3 left-0 sm:top-10 md:top-20" alt="computer" />
      <h2 class="absolute -bottom-px text-[32px] font-bold leading-10 mx-4">Как проходит обучение</h2>
    </div>
    <div class="hidden relative xl:block">
      <img src="/line1-lg.svg" alt="" />
      <h1 class="absolute top-[249px] mx-36 w-[543px] text-[56px] font-bold leading-[72px]">Как проходит обучение</h1>
    </div>
    <div class="mx-4 mb-6 xl:m-0 xl:flex xl:flex-row-reverse justify-between xl:mx-36 xl:relative xl:-top-36">
      <div class="relative h-[223px] w-[343px] mb-10 xl:mb-0 overflow-hidden">
        <img src="/img/code-image1.png" class="absolute bottom-0 left-0 z-50 transition ease-out duration-500" :class="{ 'opacity-0': slider1Index >= 1 }" alt="" />
        <img
          src="/img/code-image2.png"
          class="absolute bottom-2 right-2 z-40 transition ease-out duration-500"
          :class="{ 'bottom-1 right-5 rotate-[3deg]': slider1Index === 1, 'bottom-1 right-5 opacity-0': slider1Index >= 2 }"
          alt=""
        />
        <img
          src="/img/code-image3.png"
          class="absolute bottom-0 right-0 transition ease-out duration-500"
          :class="{ 'right-1 rotate-[6deg]': slider1Index === 1, 'right-1 rotate-[9deg]': slider1Index === 2 }"
          alt=""
        />
      </div>
      <div class="xl:hidden">
        <h2 class="text-xl leading-8 font-semibold mb-3">Живые уроки по 3 раза в неделю</h2>
        <p class="text-[14px] mb-6">Только живые лекции с тренером-профессионалом из индустрии. Объяснение темы, разбор практики и ответы на вопросы проходят в лайф режиме.</p>
        <div class="flex justify-end space-x-4 text-white">
          <div class="w-12 h-12 rounded-full flex justify-center items-center bg-[#171729]">
            <svg class="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.5 7.99976L2.5 7.99976" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M7 12.4998L2.5 7.99976L7 3.49976" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <div class="w-12 h-12 rounded-full flex justify-center items-center bg-[#171729]">
            <svg class="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.5 7.99976H13.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9 3.49976L13.5 7.99976L9 12.4998" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
      <div class="hidden xl:block w-[452px]">
        <div class="max-w-[452px] overflow-hidden" wrapper>
          <div class="flex transition-all duration-300" :style="{ 'margin-left': '-' + 100 * slider1Index + '%' }">
            <div class="w-[452px] flex-none" v-for="(el, i) in slider1Data" :key="i">
              <h2 class="text-[32px] font-bold leading-10 mb-4">{{ el.title }}</h2>
              <p class="text-[18px] leading-8 max-w-sm mb-6">{{ el.text }}</p>
            </div>
          </div>
        </div>
        <div class="flex space-x-4 text-white">
          <button @click="slider1prev" :disabled="check1Prev" class="w-12 h-12 rounded-full flex justify-center items-center bg-[#171729] disabled:bg-opacity-50">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.5 7.99976L2.5 7.99976" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M7 12.4998L2.5 7.99976L7 3.49976" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
          <button @click="slider1next" :disabled="check1Next" class="w-12 h-12 rounded-full flex justify-center items-center bg-[#171729] disabled:bg-opacity-50">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.5 7.99976H13.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M9 3.49976L13.5 7.99976L9 12.4998" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <img src="/gray-wave-line.svg" alt="line2" />
  </section>
  <!-- 7 Section -->
  <section class="mx-4 mt-14 xl:container xl:mt-[88px]">
    <h2 style="font-size: 32px" class="font-bold leading-10 mb-3 xl:text-[56px] xl:leading-[72px] xl:mb-6">Программа курса</h2>
    <p class="mb-8 xl:text-xl leading-8 xl:mb-14">
      Вы начнете изучать Java с самого нуля, постепенно повышая нагрузку. В течение обучения мы создадим несколько мини-проектов и финальные проекты для портфолио.
    </p>
    <div class="border-t border-b divide-y mb-14 xl:hidden">
      <div class="py-6">
        <div class="flex justify-between items-center">
          <p class="font-bold">Вводный модуль, переменные и типы данных</p>
          <div class="flex items-center justify-center flex-none ml-5 w-8 h-8 rounded-full border bg-[#d98624]">
            <img src="/Plus.svg" alt="plus" />
          </div>
        </div>
        <!-- ul li -->
      </div>
      <div class="py-6">
        <div class="flex justify-between items-center mb-6">
          <p class="font-bold">Условия и циклы for, while, do-while</p>
          <div class="flex items-center justify-center flex-none w-8 h-8 rounded-full border border-black">
            <img src="/Minus.svg" alt="minus" />
          </div>
        </div>
        <ul class="mr-4">
          <li class="mb-6"><p style="font-size: 14px">Погружаемся в алгоритмы и структуры данных</p></li>
          <li class="mb-6"><p style="font-size: 14px">Boolean, условные операторы</p></li>
          <li class="mb-6"><p style="font-size: 14px">Изучаем три вида циклов и применяем их на реальных задачах</p></li>
          <li class="mb-6"><p style="font-size: 14px">Создаем мини приложения: калькулятор, определение траектории обучения и многое другое</p></li>
        </ul>
      </div>
      <div class="py-6">
        <div class="flex justify-between items-center">
          <p class="font-bold w-40">Строки, массивы и 2D массив</p>
          <div class="flex items-center justify-center flex-none ml-5 w-8 h-8 rounded-full border plus">
            <img src="/Plus.svg" alt="plus" />
          </div>
        </div>
        <!-- ul li -->
      </div>
      <div class="py-6">
        <div class="flex justify-between items-center">
          <p class="font-bold w-32">Методы и Аргументы</p>
          <div class="flex items-center justify-center flex-none ml-5 w-8 h-8 rounded-full border plus">
            <img src="/Plus.svg" alt="plus" />
          </div>
        </div>
        <!-- ul li -->
      </div>
      <div class="py-6">
        <div class="flex justify-between items-center">
          <p class="font-bold">Объектно-ориентированное программирование</p>
          <div class="flex items-center justify-center flex-none ml-5 w-8 h-8 rounded-full border plus">
            <img src="/Plus.svg" alt="plus" />
          </div>
        </div>
        <!-- ul li -->
      </div>
      <div class="py-6">
        <div class="flex justify-between items-center">
          <p class="font-bold w-72">Графический интерфейс, Exceptions и коллекци</p>
          <div class="flex items-center justify-center flex-none ml-5 w-8 h-8 rounded-full border plus">
            <img src="/Plus.svg" alt="plus" />
          </div>
        </div>
        <!-- ul li -->
      </div>
      <div class="py-6">
        <div class="flex justify-between items-center">
          <p class="font-bold w-48">Работа с файлами, сериализация</p>
          <div class="flex items-center justify-center flex-none ml-5 w-8 h-8 rounded-full border plus">
            <img src="/Plus.svg" alt="plus" />
          </div>
        </div>
        <!-- ul li -->
      </div>
      <div class="py-6">
        <div class="flex justify-between items-center">
          <p class="font-bold w-52">Работа с сетями и многопоточностью</p>
          <div class="flex items-center justify-center flex-none ml-5 w-8 h-8 rounded-full border plus">
            <img src="/Plus.svg" alt="plus" />
          </div>
        </div>
        <!-- ul li -->
      </div>
      <div class="py-6">
        <div class="flex justify-between items-center">
          <p class="font-bold w-44">Работа с базой данных MySQL</p>
          <div class="flex items-center justify-center flex-none ml-5 w-8 h-8 rounded-full border plus">
            <img src="/Plus.svg" alt="plus" />
          </div>
        </div>
        <!-- ul li -->
      </div>
    </div>
    <div class="relative hidden xl:block mb-32">
      <div class="container flex">
        <div class="relative w-1/2">
          <div class="absolute top-0 -right-10 h-full w-px bg-[#D9862433]"></div>
          <div data-block class="flex flex-col space-y-20">
            <div v-for="item in blockData" :key="item.id" @click="setActive($event, item.id)" class="relative mx-8 mr-10 transition-colors timeline-lg-circle">
              <p class="font-bold text-2xl w-[368px]">{{ item.title }}</p>
            </div>
          </div>
        </div>
        <div class="w-1/2 ml-[7.5rem] mt-2" ref="blockContent">
          <h4 class="text-[18px] font-bold leading-8 mb-8">{{ currentBlockData.title }}</h4>
          <ul class="space-y-6">
            <li v-for="(item, index) in currentBlockData.content" :key="index" class="flex items-center w-[314px] text-[18px] leading-8">
              <span class="w-2 h-2 mr-4 flex-none rounded-full block bg-black"></span>
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
      <img class="absolute -bottom-40 -right-10" src="/img/imac.svg" alt="mac" />
    </div>
  </section>
  <!-- 8 Section -->
  <section class="bg-[#5424d9] pt-8 pb-10 px-4 text-white xl:pt-20 xl:pb-[120px]">
    <div class="xl:container">
      <h2 class="text-[32px] font-bold leading-10 mb-8 xl:text-[56px] xl:leading-[72px] xl:mb-18">Проекты в портфолио</h2>
      <div class="hidden xl:block bg-white text-black rounded-[25px] p-10 mb-6">
        <div class="w-12 h-12 mb-10 flex items-center justify-center border border-black rounded-full">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 7.99976L2.5 7.99976" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M7 12.4998L2.5 7.99976L7 3.49976" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <div class="mb-10">
          <h3 class="text-2xl font-bold leading-8 mb-4">Что будет сделано:</h3>
          <p class="text-[18px] leading-8">
            Вы создадите терминальное приложение банкомата, которое автоматически определяет принадлежность вашей карты к Банку и выдает соответсвующее меню для каждого типа банка. Мы сделаем
            полноценный симулятор банкомата со всеми кейсами
          </p>
        </div>
        <div class="mb-[169px]">
          <h3 class="text-2xl font-bold leading-8 mb-4">Что изучите:</h3>
          <p class="text-[18px] leading-8">
            Алгоритмы и полное понимание всех концепций объектно-ориентированного программирования: классы и объекты, наследование, полиморфизм, абстрактные классы и интефейсы
          </p>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-6 xl:grid-cols-3 xl:gap-8">
        <div class="relative">
          <div class="absolute inset-0 crypto-shadow"></div>
          <img class="object-cover w-full" src="/img/crypting.png" alt="crypto" />
          <h3 class="absolute left-4 bottom-[5.5rem] font-bold text-[18px] xl:text-2xl xl:leading-8">Шифрование текстов</h3>
          <button class="absolute bottom-6 left-4 text-black px-4 py-2 font-semibold leading-8 bg-white rounded-xl">Подробнее</button>
        </div>
        <div class="relative">
          <div class="absolute inset-0 crypto-shadow"></div>
          <img class="object-cover w-full" src="/img/airport-app.png" alt="airport app" />
          <h3 class="absolute left-4 bottom-[5.5rem] font-bold text-[18px] xl:text-2xl xl:leading-8">Приложение для бронирования авиабилетов</h3>
          <button class="absolute bottom-6 left-4 text-black px-4 py-2 font-semibold leading-8 bg-white rounded-xl">Подробнее</button>
        </div>
        <div class="relative">
          <div class="absolute inset-0 crypto-shadow"></div>
          <img class="object-cover w-full" src="/img/crm-app.png" alt="crm app" />
          <h3 class="absolute left-4 bottom-[5.5rem] font-bold text-[18px] xl:text-2xl xl:leading-8">Десктоп система управления студентами</h3>
          <button class="absolute bottom-6 left-4 text-black px-4 py-2 font-semibold leading-8 bg-white rounded-xl">Подробнее</button>
        </div>
      </div>
    </div>
  </section>
  <!-- 9 Section -->
  <section class="bg-[#171729] px-4 pt-10 pb-8 text-white xl:p-20">
    <div class="xl:container">
      <h2 class="text-[32px] font-bold leading-10 mb-4 xl:text-[56px] xl:leading-[64px] xl:mb-6">Гарантия возврата денег</h2>
      <p class="text-[14px] mb-8 xl:text-xl xl:leading-8 xl:w-[956px] xl:mb-12">
        У вас есть целая неделя, чтобы попробовать обучение на курсе. Если вы передумаете учиться - мы вернем вам внесенную сумму (с удержанием предоплаты)
      </p>
      <div class="flex xl:block">
        <button class="refund-btn py-6 flex-1 text-[18px] leading-8 font-semibold xl:px-10 xl:py-6">Записаться</button>
      </div>
    </div>
  </section>
  <!-- 10 Section -->
  <section class="my-14 xl:my-32">
    <div class="mx-4 xl:container">
      <div class="hidden xl:flex justify-between items-center mb-[72px]">
        <h2 class="text-[56px] font-bold leading-[64px]">Отзывы студентов</h2>
        <button class="flex h-12 items-center space-x-3 text-[#5424D9] font-medium px-4 py-3 border border-[#5424D9] rounded-full">
          <span>Все отзывы</span>
          <svg class="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.5 7.99976H13.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9 3.49976L13.5 7.99976L9 12.4998" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
      <h2 class="text-[32px] font-bold leading-10 xl:hidden">Истории успеха наших студентов</h2>
      <div class="my-8 transition-all flex space-x-3 overflow-x-auto scrollbars-hidden xl:my-0 xl:space-x-0 xl:grid xl:grid-cols-3 xl:grid-rows-1 xl:gap-6">
        <div v-for="(student, i) in slider2Data.slice(sliceValue, sliceValue + 3)" :key="i" class="px-4 relative w-72 xl:w-full border flex-shrink-0 border-gray-400 rounded-3xl overflow-hidden">
          <div class="absolute -top-5 -left-5 border-2 border-black p-1 rounded-3xl -rotate-45 xl:scale-125 xl:-left-3 xl:-top-1">
            <img src="/img/student.png" alt="stundent img" />
          </div>
          <div class="flex justify-end mt-8 mb-11 xl:mt-10 xl:mb-[60px] xl:mr-9">
            <img src="/img/company.png" alt="company png" />
          </div>
          <div class="xl:px-8 xl:pb-8">
            <span class="text-[14px] text-[#5CC689] bg-[#5CC6891F] px-4 py-2 rounded-full xl:text-[15px]">{{ student.job }}</span>
            <h4 class="text-black font-semibold text-xl mt-4 leading-8 xl:text-2xl xl:mt-3">{{ student.name }}</h4>
            <p class="text-[14px] mb-6 xl:text-[15px]">
              {{ student.text }}
            </p>
          </div>
        </div>
      </div>
      <div class="mx-4 flex space-x-6 items-center text-[#5424D9] xl:hidden">
        <a class="ml-4 font-medium" style="font-size: 18px" href="#">Все отзывы</a>
        <svg class="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.5 7.99976H13.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M9 3.49976L13.5 7.99976L9 12.4998" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <div class="hidden xl:flex justify-between items-center mb-32">
        <div class="flex space-x-4 mt-6 text-white">
          <button @click="slider2prev" :disabled="check2Prev" class="w-12 h-12 rounded-full flex justify-center items-center bg-[#171729] disabled:bg-opacity-50">
            <svg viewBox="0 0 16 16" fill="none" class="w-4 h-4" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.5 7.99976L2.5 7.99976" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M7 12.4998L2.5 7.99976L7 3.49976" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
          <button @click="slider2next" :disabled="check2Next" class="w-12 h-12 rounded-full flex justify-center items-center bg-[#171729] disabled:bg-opacity-50">
            <svg viewBox="0 0 16 16" fill="none" class="w-4 h-4" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.5 7.99976H13.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M9 3.49976L13.5 7.99976L9 12.4998" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
        <div class="flex space-x-1">
          <span v-for="(item, i) in slider2Range" :key="i" :class="{ 'current-slide': currentSlide === i }" class="block h-[3px] w-12 bg-[#1717291F] rounded-full transition-colors"></span>
        </div>
      </div>
    </div>
    <img src="/gray-wave-line.svg" class="my-14" alt="line3" />
    <div class="mx-4 xl:container">
      <h2 class="mb-3 font-bold leading-10 text-[32px] xl:text-[56px] xl:mb-6">Тренеры</h2>
      <p class="mb-[66px] xl:text-xl xl:leading-8 xl:w-[455px] xl:mb-[122px]">Наша команда - это симбиоз профессионалов из образования и IT индустрии.</p>
      <div class="flex space-x-3 overflow-x-auto scrollbars-hidden xl:space-x-0 xl:grid xl:grid-cols-3 xl:grid-rows-2 xl:gap-x-6 xl:gap-y-8">
        <div>
          <img class="relative bottom-[-2px] z-10" src="/img/coachhair.png" alt="" />
          <div class="relative w-80 xl:w-full border rounded-3xl overflow-hidden">
            <img src="/img/coachbody.png" alt="" />
            <h4 class="absolute right-[62px] top-[64px] xl:right-[6rem] font-bold text-[18px]">Elon Mask</h4>
            <p class="absolute right-[117px] top-[92px] xl:right-[9.5rem]">CEO</p>
          </div>
        </div>
        <div>
          <img class="relative bottom-[-2px] z-10" src="/img/coachhair.png" alt="" />
          <div class="relative w-80 xl:w-full border rounded-3xl overflow-hidden">
            <img src="/img/coachbody.png" alt="" />
            <h4 class="absolute right-[62px] top-[64px] xl:right-[6rem] font-bold text-[18px]">Elon Mask</h4>
            <p class="absolute right-[117px] top-[92px] xl:right-[9.5rem]">CEO</p>
          </div>
        </div>
        <div>
          <img class="relative bottom-[-2px] z-10" src="/img/coachhair.png" alt="" />
          <div class="relative w-80 xl:w-full border rounded-3xl overflow-hidden">
            <img src="/img/coachbody.png" alt="" />
            <h4 class="absolute right-[62px] top-[64px] xl:right-[6rem] font-bold text-[18px]">Elon Mask</h4>
            <p class="absolute right-[117px] top-[92px] xl:right-[9.5rem]">CEO</p>
          </div>
        </div>
        <div>
          <img class="relative bottom-[-2px] z-10" src="/img/coachhair.png" alt="" />
          <div class="relative w-80 xl:w-full border rounded-3xl overflow-hidden">
            <img src="/img/coachbody.png" alt="" />
            <h4 class="absolute right-[62px] top-[64px] xl:right-[6rem] font-bold text-[18px]">Elon Mask</h4>
            <p class="absolute right-[117px] top-[92px] xl:right-[9.5rem]">CEO</p>
          </div>
        </div>
        <div>
          <img class="relative bottom-[-2px] z-10" src="/img/coachhair.png" alt="" />
          <div class="relative w-80 xl:w-full border rounded-3xl overflow-hidden">
            <img src="/img/coachbody.png" alt="" />
            <h4 class="absolute right-[62px] top-[64px] xl:right-[6rem] font-bold text-[18px]">Elon Mask</h4>
            <p class="absolute right-[117px] top-[92px] xl:right-[9.5rem]">CEO</p>
          </div>
        </div>
        <div>
          <img class="relative bottom-[-2px] z-10" src="/img/coachhair.png" alt="" />
          <div class="relative w-80 xl:w-full border rounded-3xl overflow-hidden">
            <img src="/img/coachbody.png" alt="" />
            <h4 class="absolute right-[62px] top-[64px] xl:right-[6rem] font-bold text-[18px]">Elon Mask</h4>
            <p class="absolute right-[117px] top-[92px] xl:right-[9.5rem]">CEO</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <hr class="xl:hidden" />
  <!-- 11 Section -->
  <section class="xl:hidden relative px-4 pt-8 pb-12 bg-gray-50">
    <h2 class="font-semibold text-[32px] leading-10">Курс Основы программирования Java</h2>
    <div class="flex flex-col space-y-4 mt-6 mb-10">
      <p>Длительность: <span class="font-bold">2 месяца</span></p>
      <p>Старт курса: <span class="font-bold">01 сентября</span></p>
      <p>Осталось: <span class="font-bold">5 мест</span></p>
    </div>
    <p class="mb-">Цена сегодня</p>
    <p class="text-4xl font-bold">50,000 ₸ в месяц</p>
    <img class="absolute bottom-0 right-0" src="/java1.svg" alt="" />
  </section>
  <!-- 12 Section -->
  <section class="bg-[#D98624] text-white xl:py-20">
    <div class="container xl:flex rounded-3xl overflow-hidden hidden">
      <div class="relative bg-gray-50 text-black pt-10 pl-8">
        <h2 class="font-semibold text-[32px] leading-10 xl:text-4xl xl:leading-[48px]">Курс Основы программирования Java</h2>
        <div class="flex flex-col space-y-4 mt-6 mb-10 xl:mb-[120px]">
          <p>Длительность: <span class="font-bold">2 месяца</span></p>
          <p>Старт курса: <span class="font-bold">01 сентября</span></p>
          <p>Осталось: <span class="font-bold">5 мест</span></p>
        </div>
        <p class="text-gray-500 mb-1">Цена сегодня</p>
        <p class="font-bold xl:text-5xl leading-[56px] mb-16">50,000 ₸ в месяц</p>
        <img class="absolute bottom-8 right-12 scale-125 opacity-40" src="/java1.svg" alt="" />
      </div>
      <div class="bg-white text-black pt-10 px-12">
        <h2 class="mb-10 text-2xl font-bold leading-10">Записаться на курс или получить бесплатную консультацию</h2>
        <form action="" class="flex flex-col">
          <input type="text" class="px-4 py-6 mb-6 rounded-[20px] border border-gray-900 border-opacity-20" placeholder="Имя" />
          <input type="text" class="px-4 py-6 mb-14 rounded-[20px] border border-gray-900 border-opacity-20" placeholder="Телефон" />
          <div class="flex mb-6 items-center justify-between">
            <p class="text-xs w-[15.5rem]">Нажимая на кнопку, я соглашаюсь на обработку <a class="underline">персональных данных</a></p>
            <button class="bg-[#171729] rounded-[20px] py-6 w-[225px] text-white font-semibold text-[18px]">Оставить заявку</button>
          </div>
        </form>
      </div>
    </div>
    <div class="xl:hidden">
      <h2 class="pt-8 mb-8 mx-4 text-2xl font-bold">Записаться на курс или получить бесплатную консультацию</h2>
      <form action="" class="flex flex-col mx-4">
        <input type="text" class="px-4 py-6 mb-4 rounded-[20px] border border-gray-900 border-opacity-20" placeholder="Имя" />
        <input type="text" class="px-4 py-6 mb-4 rounded-[20px] border border-gray-900 border-opacity-20" placeholder="Телефон" />
        <div class="flex mb-6">
          <button class="bg-[#171729] rounded-[20px] py-6 flex-1">Оставить заявку</button>
        </div>
      </form>
      <p class="text-xs mx-4 w-[15.5rem] pb-8">Нажимая на кнопку, я соглашаюсь на обработку <a class="underline">персональных данных</a></p>
    </div>
  </section>
  <!-- Footer -->
  <footer class="bg-[#171729] pt-10 pb-12 text-white xl:pt-16">
    <div class="container hidden xl:block">
      <div class="grid grid-cols-4 gap-x-12">
        <div class="space-y-10 mx-4 mb-12">
          <div>
            <p class="pb-2 text-xl">+7 700 070 0101</p>
            <p class="text-[14px]">Контактный номер</p>
          </div>
          <div>
            <p class="pb-2 text-xl">+7 700 070 0101</p>
            <p class="text-[14px]">Тех. поддержка</p>
          </div>
          <p>ул.Айманова 126, 6-ой этаж</p>
        </div>
        <div>
          <h4 class="text-[18px] leading-6 font-semibold mb-6">Курсы</h4>
          <div class="space-y-3">
            <p>Java Standard Edition</p>
            <p>Java EE + Spring Boot</p>
            <p>Python Offline</p>
            <p>Python Online</p>
            <p>Web Intensive</p>
            <p>UX/UI Design</p>
          </div>
        </div>
        <div>
          <h4 class="text-[18px] leading-6 font-semibold mb-6">Быстрые ссылки</h4>
          <div class="space-y-3">
            <p>Контакты</p>
            <p>Блог</p>
            <p>Отзывы</p>
            <p>О нас</p>
          </div>
        </div>
        <div>
          <img class="w-16 h-16 mb-6" src="/bitlab-outline.svg" alt="bitlab icon" />
          <p class="w-[196px] text-[14px] mb-8">Регистрируйтесь на нашем портале и начинайте кодить прямо сейчас</p>
          <button class="text-[#0ACCDA] leading-8 py-2 px-[24.5px] border border-[#0ACCDA] rounded-[10px]">Войти в портал</button>
        </div>
      </div>
      <hr class="mt-20" />
      <div class="flex my-10 justify-between items-center">
        <div class="flex space-x-4 items-center border border-white px-[76px] py-4 rounded-[10px]">
          <img src="/facebook.svg" alt="fc" />
          <span>Facebook</span>
        </div>
        <div class="flex space-x-4 items-center border border-white px-[76px] py-4 rounded-[10px]">
          <img src="/instagram.svg" alt="fc" />
          <span>Instagram</span>
        </div>
        <div class="flex space-x-4 items-center border border-white px-[76px] py-4 rounded-[10px]">
          <img src="/telegram.svg" alt="fc" />
          <span>Telegram</span>
        </div>
        <img src="/arrow-footer.svg" alt="" />
        <p class="text-[14px]">Следите за нами в соц сетях</p>
      </div>
      <hr />
      <div class="flex justify-between items-center mt-10">
        <img src="/bitlab-outline.svg" alt="" />
        <p>© 2021 / Все права защищены</p>
        <a href="#" class="underline">Публичный договор-оферта</a>
      </div>
    </div>
    <div class="xl:hidden">
      <div class="space-y-10 mx-4 mb-12">
        <div>
          <p class="pb-2 text-xl">+7 700 070 0101</p>
          <p class="text-[14px]">Контактный номер</p>
        </div>
        <div>
          <p class="pb-2 text-xl">+7 700 070 0101</p>
          <p class="text-[14px]">Тех. поддержка</p>
        </div>
        <p>ул.Айманова 126, 6-ой этаж</p>
      </div>
      <a class="mx-4 underline text-[14px]">Публичный договор-оферта</a>
      <p class="mx-4 mt-4 text-[14px]">© 2021 / Все права защищены</p>
      <img class="mx-4 mt-6" src="/bitlab-outline.svg" alt="bitlab icon" />
    </div>
  </footer>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
const slider1Data = [
  {
    title: "Живые уроки с тренерами-экспертами 1",
    text: "С нуля изучите синтаксис языка и научитесь создавать собственные алгоритмы по лучшим практикам, решать задачи любой сложности.",
  },
  {
    title: "Живые уроки с тренерами-экспертами 2",
    text: "С нуля изучите синтаксис языка и научитесь создавать собственные алгоритмы по лучшим практикам, решать задачи любой сложности.",
  },
  {
    title: "Живые уроки с тренерами-экспертами 3",
    text: "С нуля изучите синтаксис языка и научитесь создавать собственные алгоритмы по лучшим практикам, решать задачи любой сложности.",
  },
];
const slider1Index = ref(0);

const blockData = [
  {
    id: 0,
    title: "Вводный модуль, переменные и типы данных",
    content: [
      "Погружаемся в алгоритмы и структуры данных",
      "Boolean, условные операторы",
      "Изучаем три вида циклов и применяем их на реальных задачах",
      "Создаем мини приложения: калькулятор, определение траектории обучения и многое другое",
    ],
  },
  {
    id: 2,
    title: "Условия и циклы for, while, do-while",
    content: ["content2"],
  },
  {
    id: 3,
    title: "Строки, массивы и 2D массив",
    content: ["content3", "content3.1"],
  },
  {
    id: 4,
    title: "Методы и Аргументы",
    content: ["content4"],
  },
  {
    id: 5,
    title: "Объектно-ориентированное программирование",
    content: ["content5"],
  },
  {
    id: 6,
    title: "Графический интерфейс, Exceptions и коллекци",
    content: ["content6", "content6.1"],
  },
  {
    id: 7,
    title: "Работа с файлами, сериализация",
    content: ["content7"],
  },
  {
    id: 8,
    title: "Работа с сетями и многопоточностью",
    content: ["content8.0"],
  },
  {
    id: 9,
    title: "Работа с базой данных MySQL",
    content: ["content9.0.1"],
  },
];

const blockContent = ref(null);

const currentBlockData = ref({});

const slider2Data = [
  {
    name: "Зарлыков Темирлан 1",
    job: "Android Developer",
    text: "Два года назад я проходила обучение в BitLab academy по стеку «Java». Здесь очень сильные, позитивные и отзывчивые преподаватели. Мне очень понравился подход к обучению преподавателей. Все предельно прозрачно объясняют, всегда придут на помощь, а также всегда в процессе развития и улучшения курсов.",
  },
  {
    name: "Зарлыков Темирлан 2",
    job: "Android Developer",
    text: "Два года назад я проходила обучение в BitLab academy по стеку «Java». Здесь очень сильные, позитивные и отзывчивые преподаватели. Мне очень понравился подход к обучению преподавателей. Все предельно прозрачно объясняют, всегда придут на помощь, а также всегда в процессе развития и улучшения курсов.",
  },
  {
    name: "Зарлыков Темирлан 3",
    job: "Android Developer",
    text: "Два года назад я проходила обучение в BitLab academy по стеку «Java». Здесь очень сильные, позитивные и отзывчивые преподаватели. Мне очень понравился подход к обучению преподавателей. Все предельно прозрачно объясняют, всегда придут на помощь, а также всегда в процессе развития и улучшения курсов.",
  },
  {
    name: "Зарлыков Темирлан 4",
    job: "Android Developer",
    text: "Два года назад я проходила обучение в BitLab academy по стеку «Java». Здесь очень сильные, позитивные и отзывчивые преподаватели. Мне очень понравился подход к обучению преподавателей. Все предельно прозрачно объясняют, всегда придут на помощь, а также всегда в процессе развития и улучшения курсов.",
  },
  {
    name: "Зарлыков Темирлан 5",
    job: "Android Developer",
    text: "Два года назад я проходила обучение в BitLab academy по стеку «Java». Здесь очень сильные, позитивные и отзывчивые преподаватели. Мне очень понравился подход к обучению преподавателей. Все предельно прозрачно объясняют, всегда придут на помощь, а также всегда в процессе развития и улучшения курсов.",
  },
  {
    name: "Зарлыков Темирлан 6",
    job: "Android Developer",
    text: "Два года назад я проходила обучение в BitLab academy по стеку «Java». Здесь очень сильные, позитивные и отзывчивые преподаватели. Мне очень понравился подход к обучению преподавателей. Все предельно прозрачно объясняют, всегда придут на помощь, а также всегда в процессе развития и улучшения курсов.",
  }
];

const slider2Index = ref(0);

const slider1prev = () => {
  if (slider1Index.value > 0) {
    slider1Index.value--;
  }
};

const slider1next = () => {
  if (slider1Index.value < slider1Data.length - 1) {
    slider1Index.value++;
  }
};

const check1Prev = computed(() => {
  return slider1Index.value === 0;
});
const check1Next = computed(() => {
  return slider1Index.value === slider1Data.length - 1;
});

const slider2prev = () => {
  if (slider2Index.value > 0) {
    slider2Index.value--;
    sliceValue.value -= 3;
  }
};

const slider2next = () => {
  if (slider2Index.value < slider2Data.length / 3 - 1) {
    slider2Index.value++;
    sliceValue.value += 3;
  }
};

const check2Prev = computed(() => {
  return slider2Index.value === 0;
});
const check2Next = computed(() => {
  return slider2Index.value === slider2Range.value - 1;
});

const sliceValue = ref(0);
const slider2Range = computed(() => {
  return Math.round(slider2Data.length / 3);
});

const currentSlide = computed(() => {
  return sliceValue.value / 3;
});

const setActive = (event, id) => {
  if (!event) {
    document.querySelector("[data-block]").children[0].classList.add("timeline-active");
  } else {
    const blocks = event.target.closest("div.flex").children;
    for (let i = 0; i < blocks.length; i++) {
      blocks[i].classList.remove("timeline-active");
    }
    event.target.closest("div").classList.add("timeline-active");
    currentBlockData.value = blockData.filter((el) => el.id === id)[0];
  }
};

onMounted((_) => {
  currentBlockData.value = blockData[0];
  setActive(_, 0);
});
</script>
