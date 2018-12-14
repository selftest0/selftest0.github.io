export default [
    {
        id: '5c0545c67f31170016165879',
        title: 'Опросник МИЭФ (IIEF). Библиотека пациента. Урология',
        formula: index => index / 2,
        test: (value) => {
            if (value < 11) return 'тяжелая степень эректильной дисфункции';
            if (value < 18) return 'средняя степень эректильной дисфункции';
            if (value < 26) return 'легкая степень эректильной дисфункции';
            return 'нет эректильной дисфункции';
        },
        list: [
            {
                question: 'За последние 4 недели как часто Вам удавалось достичь эрекции при сексуальных действиях?',
                type: 'radio',
                assumptions: [
                    'Сексуальных действий не было',
                    'Почти никогда или никогда',
                    'Изредка (гораздо реже, чем в половине случаев)',
                    'Иногда (примерно в половине случаев)',
                    'Часто (гораздо чаще, чем в половине случаев)',
                    'Почти всегда или всегда',
                ],
            }, {
                question: 'За последние 4 недели в тех случаях, когда при сексуальной стимуляции у Вас возникала эрекция, как часто она была достаточно сильной для введения полового члена во влагалище?',
                type: 'radio',
                assumptions: [
                    'Сексуальной активности не было',
                    'Почти никогда или никогда',
                    'Изредка (гораздо реже, чем в половине случаев)',
                    'Иногда (примерно в половине случаев)',
                    'Часто (гораздо чаще, чем в половине случаев)',
                    'Почти всегда или всегда',
                    'В следующих трех вопросах спрашивается об эрекциях, которые, возможно, были у Вас при попытках совершения полового акта.',
                ],
            }, {
                question: 'За последние 4 недели при попытке совершения полового акта как часто Вам удавалось ввести половой член во влагалище?',
                type: 'radio',
                assumptions: [
                    'Не пытался совершить половой акт',
                    'Почти никогда или никогда',
                    'Изредка (гораздо реже, чем в половине случаев)',
                    'Иногда (примерно в половине случаев)',
                    'Часто (гораздо чаще, чем в половине случаев)',
                    'Почти всегда или всегда',
                ],
            }, {
                question: 'За последние 4 недели при половом акте как часто Вам удавалось сохранять эрекцию после введения полового члена во влагалище?',
                type: 'radio',
                assumptions: [
                    'Не пытался совершить половой акт',
                    'Почти никогда или никогда',
                    'Изредка (гораздо реже, чем в половине случаев)',
                    'Иногда (примерно в половине случаев)',
                    'Часто (гораздо чаще, чем в половине случаев)',
                    'Почти всегда или всегда',
                ],
            }, {
                question: 'За последние 4 недели при половом акте было ли Вам трудно сохранить эрекцию до завершения полового акта?',
                type: 'radio',
                assumptions: [
                    'Не пытался совершить половой акт',
                    'Исключительно трудно',
                    'Очень трудно',
                    'Трудно',
                    'Не очень трудно',
                    'Совсем не трудно',
                ],
            }, {
                question: 'За последние 4 недели сколько Вы сделали попыток (успешных и безуспешных) совершить половой акт?',
                type: 'radio',
                assumptions: [
                    'Не пытался',
                    '1–2 попытки',
                    '3–4 попытки',
                    '5–6 попыток',
                    '7–10 попыток',
                    '11 и более попыток',
                ],
            }, {
                question: 'За последние 4 недели при попытках совершить половой акт как часто Вы были удовлетворены?',
                type: 'radio',
                assumptions: [
                    'Не пытался совершить половой акт',
                    'Почти никогда или никогда',
                    'Изредка (гораздо реже, чем в половине случаев)',
                    'Иногда (примерно в половине случаев)',
                    'Часто (гораздо чаще, чем в половине случаев)',
                    'Почти всегда или всегда',
                ],
            }, {
                question: 'За последние 4 недели насколько сильное удовольствие Вы получали от полового акта?',
                type: 'radio',
                assumptions: [
                    'Не было половых актов',
                    'Не получал удовольствия',
                    'Небольшое удовольствие',
                    'Среднее удовольствие',
                    'Большое удовольствие',
                    'Очень большое удовольствие',
                ],
            }, {
                question: 'За последние 4 недели при сексуальной стимуляции или половом акте как часто у Вас была эякуляция?',
                type: 'radio',
                assumptions: [
                    'Ни сексуальной стимуляции, ни полового акта не было',
                    'Почти никогда или никогда',
                    'Изредка (гораздо реже, чем в половине случаев)',
                    'Иногда (примерно в половине случаев)',
                    'Часто (гораздо чаще, чем в половине случаев)',
                    'Почти всегда или всегда',
                ],
            }, {
                question: 'За последние 4 недели при сексуальной стимуляции или половом акте как часто Вы испытывали оргазм, сопровождавшийся или не сопровождавшийся эякуляцией?',
                type: 'radio',
                assumptions: [
                    'Ни сексуальной стимуляции, ни полового акта не было',
                    'Почти никогда или никогда',
                    'Изредка (гораздо реже, чем в половине случаев)',
                    'Иногда (примерно в половине случаев)',
                    'Часто (гораздо чаще, чем в половине случаев)',
                    'Почти всегда или всегда',
                    'В следующих двух вопросах спрашивается о сексуальном желании. Давайте определим сексуальное желание как чувство, которое может включать в себя желание заниматься сексом (например, заняться мастурбацией или совершить половой акт), сексуальные мысли или ощущение разочарованности, связанное с отсутствием секса.',
                ],
            }, {
                question: 'За последние 4 недели как часто Вы испытывали сексуальное желание?',
                type: 'radio',
                assumptions: [
                    'Почти никогда или никогда',
                    'Изредка (гораздо реже, чем в половине случаев)',
                    'Иногда (примерно в половине случаев)',
                    'Часто (гораздо чаще, чем в половине случаев)',
                    'Почти всегда или всегда',
                ],
            }, {
                question: 'За последние 4 недели как бы Вы оценили степень Вашего сексуального желания?',
                type: 'radio',
                assumptions: [
                    'Очень низкая или влечение отсутствует',
                    'Низкая',
                    'Средняя',
                    'Высокая',
                    'Очень высокая',
                ],
            }, {
                question: 'За последние 4 недели насколько Вы были удовлетворены своей сексуальной жизнью в целом?',
                type: 'radio',
                assumptions: [
                    'Очень не удовлетворен',
                    'Относительно не удовлетворен',
                    'Где-то между удовлетворен и не удовлетворен',
                    'Относительно удовлетворен',
                    'Очень удовлетворен',
                ],
            }, {
                question: 'За последние 4 недели насколько Вы были удовлетворены сексуальными отношениями со своей сексуальной партнершей?',
                type: 'radio',
                assumptions: [
                    'Очень не удовлетворен',
                    'Относительно не удовлетворен',
                    'Где-то между удовлетворен и не удовлетворен',
                    'Относительно удовлетворен',
                    'Очень удовлетворен',
                ],
            }, {
                question: 'За последние 4 недели как бы Вы оценили степень уверенности в том, что Вы можете достичь и удержать эрекцию?',
                type: 'radio',
                assumptions: [
                    'Очень низкая',
                    'Низкая',
                    'Средняя',
                    'Высокая',
                    'Очень высокая',
                ],
            },
        ],
    },
];
