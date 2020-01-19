export const GLOBAL_SPACING = 6;

const defaultFilterStyles = {
    cursor: 'pointer',
    marginLeft: GLOBAL_SPACING * 2,
    padding: GLOBAL_SPACING / 2,
    marginBottom: GLOBAL_SPACING,
};

const getBorder = (color) => `solid 1px ${color}`;

export const styles = {
    border: (color) => getBorder(color),
    filter: {
        display: 'flex',
        flexDirection: 'column',
        border: getBorder('yellow'),
        ...defaultFilterStyles,
    },
    activeFilter: {
        border: getBorder('green'),
        ...defaultFilterStyles,
    },
    filterContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginTop: GLOBAL_SPACING * 4,
        marginBottom: GLOBAL_SPACING * 4,
        borderBottom: getBorder('orange'),
        padding: GLOBAL_SPACING,
    },
    textBox: {
        width: '100%',
        borderRadius: GLOBAL_SPACING,
        padding: GLOBAL_SPACING,
    },
    button: {
        marginTop: GLOBAL_SPACING,
        padding: GLOBAL_SPACING * 2,
        border: getBorder('green'),
        backgroundColor: 'green',
        borderRadius: GLOBAL_SPACING * 2,
        width: '50%',
        alignSelf: 'center',
        color: 'white',
    }
}