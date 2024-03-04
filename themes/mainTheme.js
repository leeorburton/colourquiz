import { createTheme } from '@rneui/themed';

const colours = {
    primaryGrey: '#272727',
    highlightGrey: '#343434',
    darkerGrey: '#131313',
    white: '#fff',
}

export const mainTheme = createTheme({
    components: {
        Input: {
            inputContainerStyle: {
                width: '70%',
                marginLeft: 'auto',
                marginRight: 'auto',
                color: colours.white,
                borderWidth: 1,
                borderRadius: 10,
                borderColor: '#737373',
            },
            inputStyle: {
                padding: 7,
                color: colours.white,
            },
            type: {
                color: colours.white,
            }
        },
        Button: (buttonprops) => ({
            containerStyle: {
                borderRadius: 40,
                width: 150,
                height: 40,
                margin: 10,
            },
            buttonStyle: {
                raised: true,
                backgroundColor: '#000',
                width: '100%',
                height: '100%',
                backgroundColor: '#000',
                loading: false,
            },
            titleStyle: {
                color: colours.white,
                fontWeight: 'normal',
                fontFamily: 'OpenSans-SemiBold',
                fontSize: 18,
            },
            disabledStyle: {
                backgroundColor: colours.darkerGrey,
            },
        }),
        Text: {
            h1Style: {
                fontWeight: 'normal',
                fontFamily: 'Inter-Black',
                fontSize: 100,
                color: colours.primaryGrey,
            },
            h2Style: {
                fontWeight: 'normal',
                fontFamily: 'Krona-One',
                fontSize: 80,
                color: colours.primaryGrey,
            },
            h3Style: {
                fontWeight: 'normal',
                fontFamily: 'Inter-Bold',
                fontSize: 70,
                color: colours.darkerGrey,
            },
            h4Style: {
                fontWeight: 'normal',
                fontFamily: 'Krona-One',
                fontSize: 65,
                color: colours.darkerGrey,
            },
            style: {
                fontWeight: 'normal',
                fontFamily: 'OpenSans-SemiBold',
                color: colours.white,
            },
        }
    }
});