import uploadImage from "@/api/mock/uploadApi";
import Editor from '@toast-ui/editor'
export default class {
    editor: Editor
    isFullscreen: boolean
    constructor(el: string, initialValue: string, public height: string) {
        this.editor = new Editor({
            el: document.querySelector(el)!,
            previewStyle: 'vertical',
            initialEditType: 'markdown',
            height: height,
            toolbarItems: this.toolbar() as [],
            initialValue: initialValue
        })
        this.isFullscreen = false
        this.ImageHook()
    }
    private toolbar() {
        return [
            ['heading', 'bold', 'italic', 'strike'],
            ['hr', 'quote'],
            ['ul', 'ol', 'task', 'indent', 'outdent'],
            ['table', 'image', 'link'],
            ['code', 'codeblock'],
            [{
                el: this.fullscreen(),
                command: 'fullscreen',
                tooltip: 'fullscreen'
            }]
        ]
    }
    private fullscreen() {
        const button = document.createElement('button')
        button.style.margin = '0'
        button.innerHTML = `全屏`;
        button.addEventListener('click', () => {
            this.editor.setHeight('100vh')
            const ul = document.querySelector('.toastui-editor-defaultUI') as HTMLDivElement
            ul.classList.toggle('fullscreen')
            this.isFullscreen = !this.isFullscreen
            if (this.isFullscreen === false) {
                this.editor.setHeight(this.height)
            }
            this.editor.focus()

            document.documentElement.addEventListener('keyup', (event: KeyboardEvent) => {
                if (event.key === 'Escape' && this.isFullscreen) {
                    const ul = document.querySelector('.toastui-editor-defaultUI') as HTMLDivElement
                    ul.classList.remove('fullscreen')
                    this.isFullscreen = false
                    if (this.isFullscreen === false) {
                        this.editor.setHeight(this.height)
                    }
                    this.editor.focus()
                }
            })
        });
        return button
    }
    private ImageHook() {
        this.editor.removeHook('addImageBlobHook')
        this.editor.addHook('addImageBlobHook', async (blob:any, callback:any) => {
            const form = new FormData()
            form.append('file', blob, blob.name)
            const response = await uploadImage(form)

            callback(response.data.url, blob.name)

        })
    }
}