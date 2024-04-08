
const getActions = () => {
    const actions = { agenda: $('#agenda').is(':checked') };
    actions.prontuario = $('#prontuario').is(':checked');
    actions.relatorio = $('#relatorio').is(':checked');
}

const getPayload = async (actions) => {
    return {
        event_type: "TesteE2E",
        client_payload: {
            actions: actions,
            clinic: {
                "username": "suporte1@amplimed.com.br",
                "password": "Kh4dDznE"
            },
            url: "https://devapp.amplimed.cloud/login"
        }
    }
}

$('#send').click(async () => {
    const url = `https://api.github.com/repos/LucasRodriguesAmplimed/automation/dispatches`
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            Authorization: 'Bearer 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'
        },
        body: JSON.stringify({
            event_type: "TesteE2E",
            client_payload: {
                actions: getActions(),
                clinic: {
                    username: "suporte1@amplimed.com.br",
                    password: "Kh4dDznE"
                },
                url: "https://devapp.amplimed.cloud/login"
            }
        })
    })
    console.log(response)
})