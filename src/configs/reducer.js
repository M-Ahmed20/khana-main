export let data = {
    foodBanks: [
        {
            "branch_name": "Aliabad",
            "latitude": 24.9200172,
            "longitude": 67.0612345
        },
        {
            "branch_name": "Numaish chowrangi",
            "latitude": 24.8732834,
            "longitude": 67.0337457
        },
        {
            "branch_name": "Saylani house phase 2",
            "latitude": 24.8278999,
            "longitude": 67.0688257
        },
        {
            "branch_name": "Touheed commercial",
            "latitude": 24.8073692,
            "longitude": 67.0357446
        },
        {
            "branch_name": "Sehar Commercial",
            "latitude": 24.8138924,
            "longitude": 67.0677652
        },
        {
            "branch_name": "Jinnah avenue",
            "latitude": 24.8949528,
            "longitude": 67.1767206
        },
        {
            "branch_name": "Johar chowrangi",
            "latitude": 24.9132328,
            "longitude": 67.1246195
        },
        {
            "branch_name": "Johar chowrangi 2",
            "latitude": 24.9100704,
            "longitude": 67.1208811
        },
        {
            "branch_name": "Hill park",
            "latitude": 24.8673515,
            "longitude": 67.0724497
        }
    ]

}

export function reducer(state, action) {
    switch (action.type) {
        case "UPDATE_SNACK": {
            return {
                ...state,
                snacks: action.payload
            }
        }
        case "UPDATE_DRINK": {
            return {
                ...state,
                drink: action.payload
            }
        }

        case "REGISTER_USER": {
            let usersClone = state.users.slice(0);
            usersClone.push(action.payload);
            return {
                ...state,
                users:usersClone
            }
        }
        default:
            return state;

    }
}