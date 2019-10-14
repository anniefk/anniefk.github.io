<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'feris-rp2-u-221939');

/** MySQL database username */
define('DB_USER', 'feris-rp2-u-221939');

/** MySQL database password */
define('DB_PASSWORD', 'FT-7MyBxr');

/** MySQL hostname */
define('DB_HOST', 'mysql4.clusterdb.net');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '4{/X|:Bj3dB85,AEJ>)asx<Bz:OA.dFg:!}(ymp^G`27N@q5W} 4&MpoL)(eIA*L');
define('SECURE_AUTH_KEY',  'tsubCD`gsyJe#ao}qK <c9d1`>zz?x<5Aj=B_v<TAc!, nlL_hegMdLVz9&8.Q]Y');
define('LOGGED_IN_KEY',    'LZwMYGYNWKaM%N2`tmZOu6r}z|m66Aqis%7=f`U>ir{xUsJ_Wmm<80Tz$P*V0/F^');
define('NONCE_KEY',        'n`uf+ O)SF?NaJ39)3LrnW^j2[Q@-</bprO|JB19zyM;R2=;~8I*.:DZf-tITvQp');
define('AUTH_SALT',        'B*>GM0.68muEp*`JvIb6&m8@)NeTJ4yN*Cb1qg|SCF8td<~j+T`jg33#[+qV{i:)');
define('SECURE_AUTH_SALT', '?MB-`Iw}Dw3HmqN=.,+?yy6#x@?o)d9GdwXm}+fuLrW1,Rv268VkXf}.YPT7wJpZ');
define('LOGGED_IN_SALT',   '.&|*pC:oC[bZf2OXbZI+:D%P_xW{l&X/1F_B|p^&|;wUZu~7th!CrFv![l_eE~?5');
define('NONCE_SALT',       '  KcH6EQxW0MhX,#Fl~eg|~bb$m|VFN|uSS6BzL}fz5hwYE@107$(s}TNlUH.(bT');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
