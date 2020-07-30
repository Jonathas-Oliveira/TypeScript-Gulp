const gulp = require('gulp')//chamando a biblioteca
const concat = require('gulp-concat')//chamando o módulo de concat
const uglify = require('gulp-uglify')//chamando o módulo de feionização
const series = gulp.series //instanciando o series a partir do gulp
const babel = require('gulp-babel')
function padrao (cb){//função que executa tarefas
    gulp.src('src/**/*.js')//pega todos os arquivos javascript em qualquer subpata
    .pipe(babel({//transforma todo arquivo js na versão antiga, ou tira comentarios.
        comments:false,
        presets:['env']
    }))
    .pipe(uglify())//transforma todo o código em 2 linhas e deixa com a aparência ''ugly''
    .pipe(concat('app.min.js'))//compila todo o código dentro de um arquivo, e tem como parametro o nome do arquivo gerado.
    .pipe(gulp.dest('build'))// pasta final para ser enviada ao servidor
    return cb()
}


exports.default = series(//excuta a função que tem as tarefas no corpo 
    padrao
)