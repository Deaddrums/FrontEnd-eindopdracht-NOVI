

export function PasswordConfirmer (rpPassword, rpConfirmPassword) {


        if (!rpPassword || !rpConfirmPassword) {
            return '';
        }

        return rpPassword === rpConfirmPassword
            ? 'rpGreen'
            : 'rpRed';

}