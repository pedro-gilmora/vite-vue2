<script lang="tsx">
import {Component, Vue} from 'vue-property-decorator'
const word: string = 'JSX & SFC works!'


@Component
export default class TestJsxSFC extends Vue{
	render() {
		return <div class={'jsx-sfc'}> {word} </div>
	}
}
</script>
